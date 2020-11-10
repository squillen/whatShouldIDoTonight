import nextConnect from 'next-connect'
import { ObjectId } from 'mongodb'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { id, name } = req.query || {}
  try {
    let result
    const authorsCollection = req.db.collection('authors')
    if (id) {
      const _id = ObjectId(id)
      result = await authorsCollection.findOne({ _id })
    } else if (name) {
      result = await authorsCollection.findOne({ name })
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN AUTHORS API :::', e)
  }
})

export default handler
