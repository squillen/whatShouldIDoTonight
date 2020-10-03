import fetch from 'isomorphic-unfetch'

export default async function callAPI (path) {
  try {
    // const uri = process.env.NODE_ENV === 'production'
    //   ? process.env.SITE_URI
    //   : 'http://localhost:3000'
    const uri = process.env.NODE_ENV === 'production'
      ? 'https://what-should-i-do-tonight-git-siteredesign11.squillen.vercel.app/'
      : 'https://what-should-i-do-tonight-git-siteredesign11.squillen.vercel.app/'
    const res = await fetch(`${uri}/api/${path}`)
    return await res.json()
  } catch (e) {
    console.error(e)
    return null
  }
}
