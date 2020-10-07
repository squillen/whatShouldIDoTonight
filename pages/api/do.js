import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { all, spotlight, category, free, limit = 0, id, included, excluded } = req.query
  const numberLimit = Number(limit)
  try {
    let result
    const doCollection = req.db.collection('do')
    if (all) {
      result = await doCollection.find()
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (category === 'all') {
      result = await doCollection.find()
      result = await result.toArray()
    } else if (category === 'free') {
      result = await doCollection.find({ free: true }).limit(numberLimit)
      result = await result.toArray()
    } else if (category) {
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
    } else if (included && excluded) {
      const includedArray = included.split(',')
      const excludedArray = excluded.split(',')
      result = await doCollection.find({
        $and: [
          { categories: { $in: includedArray } },
          { categories: { $nin: excludedArray } }
        ]
      }).limit(numberLimit)
      result = await result.toArray()
    } else {
      result = await doCollection.find().limit(numberLimit)
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN DO API :::', e)
  } finally {
    req.closeDB()
  }
})

export default handler
