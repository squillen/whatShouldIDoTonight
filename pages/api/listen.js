import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'
import { findAllActivities } from '../../lib/helpers/db/requests'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { all, spotlight, category, id } = req.query
  try {
    let result
    const listenCollection = req.db.collection('listen')

    if (all) {
      result = await listenCollection.find()
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (category) {
      // const searchFor = comedy || code || finance || educational || food || technology || crime
      result = await listenCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await listenCollection.findOne({ _id })
    } else if (spotlight) {
      result = await listenCollection.find({ spotlight: true })
      result = await result.toArray()
    } else {
      result = await findAllActivities(listenCollection)
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN LISTEN API :::', e)
  } finally {
    req.closeDB()
  }
})

export default handler
