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

export async function getActivityFromDB (source, id) {
  try {
    const options = getOptions()
    const activity = await callAPI(`${source}?id=${id}`, options)
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

export async function findAllActivities (collection, limit) {
  return await collection.find({
    $or: [
      { article: false },
      { article: { $exists: false } },
    ],
  })
    .limit(limit)
}
