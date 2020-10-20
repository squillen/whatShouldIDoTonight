import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'
import { findAllActivities } from '../../lib/helpers/db/requests'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { all, articles, spotlight, ideas, category, free, id } = req.query
  try {
    let result
    const watchCollection = req.db.collection('watch')
    if (all) {
      result = await watchCollection.find()
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (category) {
      result = await watchCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (free) {
      result = await watchCollection.find({ free: true })
      result = await result.toArray()
    } else if (articles) {
      result = await watchCollection.find({ article: true })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await watchCollection.findOne({ _id })
    } else if (spotlight) {
      result = await watchCollection.find({ spotlight: true })
      result = await result.toArray()
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
  } finally {
    req.closeDB()
  }
})

handler.patch(async (req, res) => {
  const { body, query = {} } = req
  const { id = '' } = query
  const _id = ObjectId(id)

  try {
    let result
    const watchCollection = req.db.collection('watch')
    if (body.update) {
      result = await watchCollection.updateOne({ _id }, { $set: body.update }, { upsert: true })
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN WATCH API :::', e)
  } finally {
    req.closeDB()
  }
})

export default handler
