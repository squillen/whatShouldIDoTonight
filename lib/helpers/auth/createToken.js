const jwt = require('jsonwebtoken')
const privateKey = ''
const stuff = require('./tenants')
const token = jwt.sign(stuff.admin, privateKey)

console.log('token :>> ', token)

const signedToken = ''

const decoded = jwt.verify(signedToken, privateKey)

console.log('decoded :>> ', decoded)
