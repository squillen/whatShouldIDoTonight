import jwt from 'jsonwebtoken'
import tenants from './tenants'

export function authorizeRequest (header = {}) {
  const { authorization = '', issuer } = header
  try {
    const cleanedToken = cleanToken(authorization)
    return verifyToken(cleanedToken, issuer)
  } catch (e) {
    console.error(e)
  }
}

export function cleanToken (token) {
  return token.split(' ') ? token.split(' ')[1] : token
}

export function verifyToken (token, issuer) {
  const tenant = tenants[issuer] || {}
  if (!tenant) {
    return { error: 'No matching issuer.' }
  }
  let result = { error: 'Unable to verify with the supplied token' }
  try {
    result = jwt.verify(token, process.env.ADMIN_AUTH_SECRET)
    result = result.iat && { authorized: true }
  } catch (e) {
    console.error(e)
  }
  return result
}
