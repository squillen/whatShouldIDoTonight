import fetch from 'isomorphic-unfetch'

export default async function callAPI (path) {
  try {
    const uri = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.SITE_URI
    const url = new URL(`/api/${path}`, uri)
    const res = await fetch(url)
    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
