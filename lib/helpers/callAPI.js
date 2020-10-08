import axios from 'axios'

export default async function callAPI (path, method = 'get') {
  try {
    const uri = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.SITE_URI || 'https://whatshouldidotonight.com'
    const url = `${uri}/api/${path}`

    const res = await axios({
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res.data
  } catch (e) {
    console.error(e)
    return null
  }
}
