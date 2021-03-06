import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import database from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'
import { findAllActivities } from '../../lib/helpers/db/requests'
import { authorizeRequest } from '../../lib/helpers/auth/authentication'

const handler = nextConnect()

handler.use(database)

handler.get(async (req, res) => {
  const { all, allWithoutCategories, lookup, name, articles, spotlight, ideas, category, free, id } = req.query
  try {
    let result
    const watchCollection = req.db.collection('watch')
    const expirationCheck = [
      { expirationDate: { $exists: false } },
      { expirationDate: { $gte: new Date() } },
    ]
    if (all) {
      result = await watchCollection.find({ $or: expirationCheck })
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (allWithoutCategories) {
      result = await watchCollection.find({ $or: expirationCheck })
      result = await result.toArray()
      return res.json(result)
    } else if (lookup) {
      result = await watchCollection.findOne({ lookup })
    } else if (name) {
      const search = name.split('_').join(' ')
      result = await watchCollection.findOne({ name: search })
    } else if (category) {
      result = await watchCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (free) {
      result = await watchCollection.find({ free: true })
      result = await result.toArray()
    } else if (articles) {
      result = await watchCollection.find({ $and: [{ article: true }, { $or: expirationCheck }] })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await watchCollection.findOne({ _id })
    } else if (spotlight) {
      const articles = await watchCollection.find({ $and: [{ article: true }, { spotlight: true }], $or: expirationCheck }).sort({ _id: -1 })
      // don't get if an article since those are gotten in previous query ^^
      const spotlight = await watchCollection.find({ $and: [{ spotlight: true, $or: [{ article: false }, { article: { $exists: false } }] }], $or: expirationCheck })
      const articlesArray = (articles && await articles.toArray()) || []
      const spotlightArray = await spotlight.toArray()
      result = [...articlesArray, ...spotlightArray]
    } else if (ideas) {
      result = await watchCollection.find({ pagePath: { $exists: true } })
      result = await result.toArray()
    } else {
      result = await findAllActivities(watchCollection)
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN WATCH API :::', e)
  }
})

handler.post(async (req, res) => {
  const { body, headers } = req
  const { authorized, error } = authorizeRequest(headers)
  if (authorized) {
    try {
      const watchCollection = req.db.collection('watch')
      const result = await watchCollection.insertOne(body)
      res.json(result)
    } catch (e) {
      throw new Error('ERROR IN WATCH POST API :::', e)
    }
  } else if (error) {
    throw new Error(error)
  }
})

handler.patch(async (req, res) => {
  const { body, headers, query = {} } = req
  const { id = '' } = query
  const _id = ObjectId(id)
  const { authorized, error } = authorizeRequest(headers)
  if (authorized) {
    try {
      const watchCollection = req.db.collection('watch')
      const update = body.update || body
      update.dateModified = new Date()
      const result = await watchCollection.updateOne({ _id }, { $set: update }, { upsert: true })
      res.json(result)
    } catch (e) {
      throw new Error('ERROR IN WATCH PATCH API :::', e)
    }
  } else if (error) {
    throw new Error(error)
  }
})

export default handler
