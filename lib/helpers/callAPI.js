import axios from 'axios'

export async function callAPI (path, options = {}) {
  try {
    const uri = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.SITE_URI || 'https://whatshouldidotonight.com'
    const url = `${uri}/api/${path}`
    const method = options.method.toLowerCase() || 'get'
    const result = await axios[method](url, options.body || {}, options)
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
      issuer: 'admin',
      Authorization: process.env.API_AUTH_TOKEN || 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJhZG1pbiIsInJvbGVzIjpbImFkbWluaXN0cmF0b3IiXSwiaWF0IjoxNjA3MjY0NjI2fQ.Y-O8FSJFLFnxIWvZ8MpdyLnGXKW7sS6w3DT0G9MqA_w',
    },
    method,
  }
}
