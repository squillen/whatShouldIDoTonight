import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { spotlight, category, id } = req.query
  try {
    let result
    const eatCollection = req.db.collection('eat')
    if (category) {
      result = await eatCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await eatCollection.findOne({ _id })
    } else if (spotlight) {
      result = await eatCollection.find({ spotlight: true })
      result = await result.toArray()
    } else {
      result = await eatCollection.find()
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN EAT API :::', e)
  }
})

export default handler
