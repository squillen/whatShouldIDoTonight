import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

let cached = global.mongo
if (!cached) cached = global.mongo = {}

async function database (req, res, next) {
  if (cached.conn) {
    req.dbClient = cached.conn.client
    req.db = cached.conn.db
    return next()
  }

  if (!cached.promise) {
    const conn = {}
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    cached.promise = MongoClient.connect(uri, opts)
      .then((client) => {
        conn.client = client
        return client.db(dbName)
      })
      .then((db) => {
        conn.db = db
        cached.conn = conn
      })
      .catch(e => {
        throw new Error(e)
      })
  }

  try {
    await cached.promise
    req.dbClient = cached.conn.client
    req.db = cached.conn.db
  } catch (e) {
    console.error('ERROR CONNECTING DB:::', e)
  }

  return next()
}

const middleware = nextConnect()
middleware.use(database)

export default middleware
