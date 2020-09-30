import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { spotlight, ideas, category, free, id } = req.query
  try {
    let result
    const watchCollection = req.db.collection('watch')
    if (category) {
      result = await watchCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (free) {
      result = await watchCollection.find({ free: true })
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
      result = await watchCollection.find()
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN WATCH API :::', e)
  }
})

export default handler
