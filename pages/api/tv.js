import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { comedy, drama, horror, action, free, id } = req.query
  try {
    let result
    const showsCollection = req.db.collection('tvShows')
    if (comedy || drama || horror) {
      const searchFor = comedy || drama || horror || action
      result = await showsCollection.find({ categories: { $in: [searchFor] } })
      result = await result.toArray()
    } else if (free) {
      result = await showsCollection.find({ free: true })
      result = await result.toArray()
    } else if (id) {
      const _id = ObjectId(id)
      result = await showsCollection.findOne({ _id })
    } else {
      result = await showsCollection.find()
      result = await result.toArray()
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN TV API :::', e)
  }
})

export default handler
