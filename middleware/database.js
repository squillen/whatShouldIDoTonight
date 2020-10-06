import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

let cachedClient = null
let cachedDb = null

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

async function database (req, res, next) {
  if (cachedClient && cachedDb) {
    req.dbClient = cachedClient
    req.db = cachedDb
    req.closeDB = cachedClient.close
    return next()
  }
  try {
    if (!client.isConnected()) await client.connect()
    const db = client.db(dbName)
    cachedClient = client
    cachedDb = db
    req.dbClient = client
    req.db = db
    req.closeDB = client.close
  } catch (e) {
    console.error(e)
  }
  return next()
}

const middleware = nextConnect()
middleware.use(database)

export default middleware
