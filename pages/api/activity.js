import { ObjectId } from 'mongodb'
import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { query = {} } = req
  const { title = '' } = query

  try {
    let result
    if (title) {
      const activityCollection = req.db.collection('activity')
      result = await activityCollection.findOne({ title })
      if (!result) result = await activityCollection.insertOne({ title, helpfulCounts: { helpful: 0, unhelpful: 0 } })
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN ACTIVITY PATCH API :::', e)
  } finally {
    req.closeDB()
  }
})

handler.patch(async (req, res) => {
  const { body, query = {} } = req
  const { id = '', title } = query
  const _id = ObjectId(id)

  try {
    let updateBy = { }
    if (_id) updateBy = { _id }
    else if (title) updateBy = { title }
    const activityCollection = req.db.collection('activity')
    const expirationDate = body.expirationDate || ''
    if (expirationDate) body.expirationDate = new Date(expirationDate)
    const result = await activityCollection.updateOne(updateBy, { $set: body }, { upsert: true })
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN ACTIVITY PATCH API :::', e)
  }
})

export default handler
