import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'
import { findAllActivities } from '../../lib/helpers/db/requests'
import { authorizeRequest } from '../../lib/helpers/auth/authentication'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { articles, lookup, latest, name, all, spotlight, category, free, limit = 0, id, included, excluded } = req.query
  const numberLimit = Number(limit)
  const expirationCheck = [
    { expirationDate: { $exists: false } },
    { expirationDate: { $gte: new Date() } },
  ]
  try {
    let result
    const doCollection = req.db.collection('do')
    if (all) {
      result = await doCollection.find({ $or: expirationCheck })
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (latest) {
      result = await doCollection.find().sort({ _id: 1 }).limit(5)
      result = await result.toArray()
    } else if (lookup) {
      result = await doCollection.findOne({ lookup })
    } else if (category === 'total') {
      result = await doCollection.find({ $or: expirationCheck })
      result = await result.toArray()
    } else if (category === 'free') {
      result = await doCollection.find({ free: true }).limit(numberLimit)
      result = await result.toArray()
    } else if (name) {
      const search = name.split('_').join(' ')
      result = await doCollection.findOne({ name: search })
    } else if (category) {
      result = await doCollection.find({ categories: { $in: [category] }, $or: expirationCheck }).limit(numberLimit)
      result = await result.toArray()
    } else if (free) {
      result = await doCollection.find({ $or: [{ free: true }, { free: 'true' }] })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await doCollection.findOne({ _id })
    } else if (spotlight) {
      // don't show the 4 most recent since those will be in "The Latest" section
      const articles = await doCollection.find({ $and: [{ article: true }, { spotlight: true }], $or: expirationCheck }).sort({ _id: -1 }).skip(4)
      // don't get if an article since those are gotten in previous query ^^
      const spotlight = await doCollection.find({ $and: [{ spotlight: true, $or: [{ article: false }, { article: { $exists: false } }] }], $or: expirationCheck })
      const articlesArray = (articles && await articles.toArray()) || []
      const spotlightArray = await spotlight.toArray()
      result = [...articlesArray, ...spotlightArray]
    } else if (included && excluded) {
      const includedArray = included.split(',')
      const excludedArray = excluded.split(',')
      result = await doCollection.find({
        $and: [
          { categories: { $in: includedArray } },
          { categories: { $nin: excludedArray } },
        ],
      }).limit(numberLimit)
      result = await result.toArray()
    } else if (articles) {
      result = await doCollection.find({ $and: [{ article: true }, { $or: expirationCheck }] }).limit(numberLimit)
      result = await result.toArray()
    } else {
      result = await findAllActivities(doCollection, numberLimit, { $or: expirationCheck })
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN DO API :::', e)
  }
})

handler.post(async (req, res) => {
  const { body, headers } = req
  const { authenticated, error } = authorizeRequest(headers)
  if (authenticated) {
    try {
      const doCollection = req.db.collection('do')
      const expirationDate = body.expirationDate || ''
      if (expirationDate) body.expirationDate = new Date(expirationDate)
      const result = await doCollection.insertOne(body)
      res.json(result)
    } catch (e) {
      throw new Error('ERROR IN DO POST API :::', e)
    }
  } else if (error) {
    throw new Error(error)
  }
})

handler.patch(async (req, res) => {
  const { body, headers, query = {} } = req
  const { id = '' } = query
  const _id = ObjectId(id)
  const { authenticated, error } = authorizeRequest(headers)
  if (authenticated) {
    try {
      const doCollection = req.db.collection('do')
      const expirationDate = body.expirationDate || ''
      if (expirationDate) body.expirationDate = new Date(expirationDate)
      body.dateModified = new Date()
      const result = await doCollection.updateOne({ _id }, { $set: body })
      res.json(result)
    } catch (e) {
      throw new Error('ERROR IN DO PATCH API :::', e)
    }
  } else if (error) {
    throw new Error(error)
  }
})

export default handler
