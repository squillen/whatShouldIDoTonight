import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { spotlight, free, category, id } = req.query
  try {
    let result
    const learnCollection = req.db.collection('read')
    if (category) {
      result = await learnCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (free) {
      result = await learnCollection.find({ free: true })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await learnCollection.findOne({ _id })
    } else if (spotlight) {
      result = await learnCollection.find({ spotlight: true })
      result = await result.toArray()
    } else if (all) {
      result = await learnCollection.find()
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN READ API :::', e)
  }
})

export default handler
