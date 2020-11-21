const jwt = require('jsonwebtoken')
const privateKey = process.env.ADMIN_AUTH_SECRET
const stuff = require('./tenants')
const token = jwt.sign(stuff.admin, privateKey)

console.log('token :>> ', token)

const signedToken = ''

const decoded = jwt.verify(signedToken, privateKey)

console.log('decoded :>> ', decoded)
