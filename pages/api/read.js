import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'
import { getAllCategories } from '../../lib/helpers/dataHelpers'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { articles, name, all, spotlight, free, category, id } = req.query
  try {
    let result
    const readCollection = req.db.collection('read')
    if (all) {
      result = await readCollection.find()
      result = await result.toArray()
      const categories = getAllCategories(result)
      return res.json(categories)
    } else if (name) {
      const search = name.split('_').join(' ')
      result = await readCollection.findOne({ name: search })
    } else if (category) {
      result = await readCollection.find({ categories: { $in: [category] } })
      result = await result.toArray()
    } else if (free) {
      result = await readCollection.find({ free: true })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await readCollection.findOne({ _id })
    } else if (spotlight) {
      result = await readCollection.find({ spotlight: true })
      result = await result.toArray()
    } else if (articles) {
      result = await readCollection.find({ article: true })
      result = await result.toArray()
    } else {
      result = await readCollection.find()
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN READ API :::', e)
  } finally {
    req.closeDB()
  }
})

export default handler
