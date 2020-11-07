import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'
import { findAllActivities } from '../../lib/helpers/db/requests'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { articles, spotlight, category, all, id } = req.query
  try {
    let result
    const drinkCollection = req.db.collection('drink')
    if (all) {
      result = await drinkCollection.find()
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (category === 'all') {
      result = await drinkCollection.find()
      result = await result.toArray()
    } else if (category) {
      result = await drinkCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await drinkCollection.findOne({ _id })
    } else if (spotlight) {
      result = await drinkCollection.find({ spotlight: true })
      result = await result.toArray()
    } else if (articles) {
      result = await drinkCollection.find({ article: true })
      result = await result.toArray()
    } else {
      result = await findAllActivities(drinkCollection)
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN DRINK API :::', e)
  } finally {
    req.closeDB()
  }
})

handler.post(async (req, res) => {
  const { body } = req
  try {
    const drinkCollection = req.db.collection('drink')
    const expirationDate = body.expirationDate || ''
    if (expirationDate) body.expirationDate = new Date(expirationDate)
    const result = await drinkCollection.insertOne(body)
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN DRINK POST API :::', e)
  } finally {
    req.closeDB()
  }
})

handler.patch(async (req, res) => {
  const { body, query = {} } = req
  const { id = '' } = query
  const _id = ObjectId(id)

  try {
    const drinkCollection = req.db.collection('drink')
    const expirationDate = body.expirationDate || ''
    if (expirationDate) body.expirationDate = new Date(expirationDate)
    body.dateModified = new Date()
    const result = await drinkCollection.updateOne({ _id }, { $set: body })
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN DRINK PATCH API :::', e)
  } finally {
    req.closeDB()
  }
})

export default handler
