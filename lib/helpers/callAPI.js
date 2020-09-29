import fetch from 'isomorphic-unfetch'

export default async function callAPI (path) {
  try {
    const uri = process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : process.env.SITE_URI || 'https://www.whatshouldidotonight.com'
    const res = await fetch(`${uri}/api/${path}`)
    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
