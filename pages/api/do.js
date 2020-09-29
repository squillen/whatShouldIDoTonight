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
    const learnCollection = req.db.collection('do')
    if (category) {
      result = await learnCollection.find({ categories: { $in: [category] } }).limit(numberLimit)
      result = await result.toArray()
    } else if (free) {
      result = await learnCollection.find({ free: true }).limit(numberLimit)
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await learnCollection.findOne({ _id })
    } else if (spotlight) {
      result = await learnCollection.find({ spotlight: true }).limit(numberLimit)
      result = await result.toArray()
    } else {
      result = await learnCollection.find().limit(numberLimit)
      result = await result.toArray()
    }
    res.json(result)
    // const test = JSON.parse(result)
    // if (test) res.json(result)
    // else throw new Error()
  } catch (e) {
    throw new Error('ERROR IN DO API :::', e)
  }
})

export default handler
