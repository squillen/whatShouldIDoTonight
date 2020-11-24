import nextConnect from 'next-connect'
import middleware from '../../middleware/database'

const handler = nextConnect()

handler.use(middleware)

handler.get(async (req, res) => {
  const { email } = req.query || {}
  try {
    let result
    const emailCollection = req.db.collection('emails')
    if (email) {
      result = await emailCollection.findOne({ email })
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN EMAILS API :::', e)
  }
})

handler.post(async (req, res) => {
  const { email } = req.query || {}
  try {
    let result
    const emailCollection = req.db.collection('emails')
    if (email) {
      const signUp = { email, signUpDate: new Date() }
      result = await emailCollection.insertOne(signUp)
    }
    res.json(result)
  } catch (e) {
    throw new Error('ERROR IN EMAILS API :::', e)
  }
})

export default handler
