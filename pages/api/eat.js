import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'
import { findAllActivities } from '../../lib/helpers/db/requests'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { articles, name, spotlight, category, all, id } = req.query
  try {
    let result
    const eatCollection = req.db.collection('eat')
    if (all) {
      result = await eatCollection.find()
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (category === 'all') {
      result = await eatCollection.find()
      result = await result.toArray()
    } else if (name) {
      const search = name.split('_').join(' ')
      result = await eatCollection.findOne({ name: search })
    } else if (category) {
      result = await eatCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await eatCollection.findOne({ _id })
    } else if (spotlight) {
      result = await eatCollection.find({ spotlight: true })
      result = await result.toArray()
    } else if (articles) {
      result = await eatCollection.find({ article: true })
      result = await result.toArray()
    } else {
      result = await findAllActivities(eatCollection)
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN EAT API :::', e)
  } finally {
    req.closeDB()
  }
})

export default handler
