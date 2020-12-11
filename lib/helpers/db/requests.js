import { callAPI, getOptions } from '../callAPI'
export async function getActivitiesFromDB (source) {
  let spotlight, all, latest
  try {
    const options = getOptions()
    const handleCall = (path) => callAPI(`${source}?${path}`, options).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('all=all'),
      handleCall('latest=latest'),
    ])
    spotlight = promises[0]
    all = promises[1]
    latest = promises[2]
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      spotlight,
      all,
      latest,
      setInRedux: true,
    },
  }
}

export async function getActivityFromDB (source, lookup) {
  try {
    const options = getOptions()
    const activity = await callAPI(`${source}?lookup=${lookup}`, options)
    return activity
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function getAllCollectionActivities (collection) {
  try {
    const options = getOptions()
    const activities = await callAPI(`${collection}?allWithoutCategories=allWithoutCategories`, options)
    return activities
  } catch (e) {
    console.error(e)
    return {}
  }
}

export async function getAllCollectionActivitiesWithCategories (collection) {
  try {
    const options = getOptions()
    const activities = await callAPI(`${collection}?all=all`, options)
    return activities
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
    // { ...query },
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

export async function updateActivityHelpfulCounts ({ _id, counts, source }) {
  try {
    const options = getOptions('patch')
    options.body = { helpfulCounts: counts }
    const stub = `${source}?id=${_id}`
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

export async function findUserInEmailList (email) {
  try {
    const options = getOptions()
    const path = `emails?email=${email}`
    return await callAPI(path, options)
  } catch (e) {
    console.error(e)
    return null
  }
}

export async function addUserToEmailList (email) {
  try {
    const options = getOptions('post')
    const path = `emails?email=${email}`
    return await callAPI(path, options)
  } catch (e) {
    console.error(e)
    return null
  }
}

export async function signUserUpForEmails (email) {
  try {
    const alreadySignedUp = await findUserInEmailList(email)
    if (alreadySignedUp) return { error: true }
    else {
      await addUserToEmailList(email)
      return { success: true }
    }
  } catch (e) {
    console.error(e)
  }
}
