import axios from 'axios'

export async function getIMDbResults (id) {
  try {
    const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${id}&r=json`
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        'x-rapidapi-key': '7cb4e7ac99mshd4d19d0e60b6de5p13eb8fjsn46e8a7dfcf1f',
      },
    })
    return res.data
  } catch (error) {
    console.error(error)
    return {}
  }
}
