import { callAPI, getOptions } from '../callAPI'
export async function getActivitiesFromDB (source) {
  let spotlight, all, articles
  try {
    const options = getOptions()
    const handleCall = (path) => callAPI(`${source}?${path}`, options).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('all=all'),
      handleCall('articles=articles'),
    ])
    spotlight = promises[0]
    all = promises[1]
    articles = promises[2]
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      spotlight,
      all,
      articles,
      setInRedux: true,
    },
  }
}

export async function getActivityFromDB (source, name) {
  try {
    const options = getOptions()
    const activity = await callAPI(`${source}?name=${name}`, options)
    return activity
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function updateActivityIMDbInDB (id, update) {
  try {
    const options = getOptions()
    options.body = { update }
    options.method = 'patch'
    const updatedActivity = await callAPI(`watch?id=${id}`, options)
    return updatedActivity
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function findAllActivities (collection, limit = 0, query) {
  return await collection.find(
    // $or: [
    //   { article: false },
    //   { article: { $exists: false } },
    // ],
    { ...query },
  )
    .limit(limit)
}

export async function findActivityByTitle (title, source) {
  try {
    const options = getOptions()
    const stub = `${source}?title=${title}`
    const activity = await callAPI(stub, options)
    return activity
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function updateActivityHelpfulCounts ({ _id, counts, source, title }) {
  try {
    const options = getOptions('patch')
    options.body = { helpfulCounts: counts }
    const stub = `${source}?${title ? `title=${title}` : `id=${_id}`}`
    return await callAPI(stub, options)
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function getAuthorInfo ({ name, id }) {
  try {
    const options = getOptions()
    const path = `authors?name=${name}&id=${id}`
    return await callAPI(path, options)
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function getArticleByID (id, source) {
  try {
    const options = getOptions()
    const path = `${source}?id=${id}`
    return await callAPI(path, options)
  } catch (e) {
    console.error(e)
    return {}
  }
}
