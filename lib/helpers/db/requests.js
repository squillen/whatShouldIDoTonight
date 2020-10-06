import callAPI from '../callAPI'
import handleMarkdown from '../handleMarkdown'
export async function getActivitiesFromDB (source) {
  let spotlight, all
  try {
    const handleCall = (path) => callAPI(`${source}?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('all=all')
    ])
    spotlight = promises[0]
    all = promises[1]
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      spotlight,
      all,
      setInRedux: true
    }
  }
}

export async function getActivityFromDB (source, id) {
  try {
    const activity = await callAPI(`${source}?id=${id}`)
    const markdownTLDR = await handleMarkdown(activity.TLDR)
    const markdownBody = await handleMarkdown(activity.body)
    activity.markdownTLDR = markdownTLDR
    activity.markdownBody = markdownBody
    return activity
  } catch (e) {
    console.error(e)
    return {}
  }
}
