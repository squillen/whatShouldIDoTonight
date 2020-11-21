import axios from 'axios'

export async function callAPI (path, options = {}) {
  try {
    const uri = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.SITE_URI || 'https://whatshouldidotonight.com'
    const url = `${uri}/api/${path}`
    const method = options.method.toLowerCase() || 'get'
    const result = await axios[method](url, options.body || {})
    return result.data
  } catch (e) {
    console.error(e)
    return null
  }
}

export function getOptions (method = 'get') {
  return {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    issuer: 'admin',
    method,
  }
}
