import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { spotlight, category, free, limit = 0, id } = req.query
  const numberLimit = Number(limit)
  try {
    let result
    const doCollection = req.db.collection('do')
    if (category === 'all') {
      result = await doCollection.find()
      result = await result.toArray()
    } else if (category) {
      console.log('inside category', category)
      result = await doCollection.find({ categories: { $in: [category] } }).limit(numberLimit)
      result = await result.toArray()
    } else if (free) {
      result = await doCollection.find({ free: true }).limit(numberLimit)
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await doCollection.findOne({ _id })
    } else if (spotlight) {
      result = await doCollection.find({ spotlight: true }).limit(numberLimit)
      result = await result.toArray()
    } else {
      result = await doCollection.find().limit(numberLimit)
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN DO API :::', e)
  }
})

export default handler
