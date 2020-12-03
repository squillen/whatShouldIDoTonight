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
  const secret = tenant.secret
  if (!tenant) {
    return { error: 'No matching issuer.' }
  }
  let result = { error: 'Unable to verify with the supplied token' }
  try {
    result = jwt.verify(token, secret)
    result = result.iat && { authorized: true }
  } catch (e) {
    console.error(e)
  }
  return result
}
