import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { spotlight, ideas, category, free, id } = req.query
  try {
    let result
    const showsCollection = req.db.collection('watch')
    if (category) {
      result = await showsCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (free) {
      result = await showsCollection.find({ free: true })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await showsCollection.findOne({ _id })
    } else if (spotlight) {
      result = await showsCollection.find({ spotlight: true })
      result = await result.toArray()
    } else if (ideas) {
      result = await showsCollection.find({ pagePath: { $exists: true } })
      result = await result.toArray()
    } else {
      result = await showsCollection.find()
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN WATCH API :::', e)
  }
})

export default handler
