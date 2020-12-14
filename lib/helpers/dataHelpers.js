export function getUserActivities ({ activities, userAlone, spendMoney, goOutside }) {
  const goOutsideAsNumber = Number(goOutside)
  let userActivities = []
  // PREP FOR "ANYONE" ACTIVITIES
  userActivities = spendMoney
    // I DON'T CARE IF I SPEND MONEY
    ? goOutsideAsNumber === 3 // MONEY/NO MONEY, INSIDE/OUTSIDE
      ? [
        ...activities['/anyone/free/outside'],
        ...activities['/anyone/free/inside'],
        ...activities['/anyone/notFree/outside'],
        ...activities['/anyone/notFree/inside'],
      ]
      : goOutsideAsNumber === 1 // MONEY/NO MONEY, OUTSIDE
        ? [...activities['/anyone/free/outside']]
        : [...activities['/anyone/free/inside']]

    // I DON'T WANT TO SPEND MONEY
    : goOutsideAsNumber === 3 // NO MONEY, INSIDE/OUTSIDE
      ? [
        ...activities['/anyone/free/outside'],
        ...activities['/anyone/free/inside'],
      ]
      : goOutsideAsNumber === 1 // NO MONEY, OUTSIDE
        ? [...activities['/anyone/free/outside']]
        : [...activities['/anyone/free/inside']]

  const userSpecificEvents = userAlone
    // USER IS ALONE
    ? spendMoney
      ? goOutsideAsNumber === 3 // MONEY/NO MONEY, INSIDE/OUTSIDE
        ? [
          ...activities['/alone/free/inside'],
          ...activities['/alone/free/outside'],
          ...activities['/alone/notFree/inside'],
          ...activities['/alone/notFree/outside'],
        ]
        : goOutsideAsNumber === 1 // OUTSIDE
          ? [...activities['/alone/free/outside'], ...activities['/alone/notFree/outside']]
          : [...activities['/alone/free/inside'], ...activities['/alone/notFree/inside']]
      // USER DOES NOT WANT TO SPEND MONEY
      : goOutsideAsNumber === 3
        ? [
          ...activities['/alone/free/inside'],
          ...activities['/alone/free/outside'],
        ]
        : goOutsideAsNumber === 1 // NO MONEY, OUTSIDE
          ? [...activities['/alone/free/outside']]
          : [...activities['/alone/free/inside']]

    // USER IS NOT ALONE
    : spendMoney
      ? goOutsideAsNumber === 3 // MONEY/NO MONEY, INSIDE/OUTSIDE
        ? [
          ...activities['/notAlone/free/inside'],
          ...activities['/notAlone/free/outside'],
          ...activities['/notAlone/notFree/inside'],
          ...activities['/notAlone/notFree/outside'],
        ]
        : goOutsideAsNumber === 1 // OUTSIDE
          ? [...activities['/notAlone/free/outside'], ...activities['/notAlone/notFree/outside']]
          : [...activities['/notAlone/free/inside'], ...activities['/notAlone/notFree/inside']]
      // USER DOES NOT WANT TO SPEND MONEY
      : goOutsideAsNumber === 3
        ? [
          ...activities['/notAlone/free/inside'],
          ...activities['/notAlone/free/outside'],
        ]
        : goOutsideAsNumber === 1 // NO MONEY, OUTSIDE
          ? [...activities['/notAlone/free/outside']]
          : [...activities['/notAlone/free/inside']]

  userActivities = [...userActivities, ...userSpecificEvents]
  return userActivities
}

export function sortActivities (activities) {
  const anyoneAndFree = [...activities['/anyone/free/outside'], ...activities['/anyone/free/inside']]
  const anyoneAndNotFree = [...activities['/anyone/notFree/outside'], ...activities['/anyone/notFree/inside']]
  const aloneAndFree = [...activities['/alone/free/outside'], ...activities['/alone/free/inside']]
  const aloneAndNotFree = [...activities['/alone/notFree/outside'], ...activities['/alone/notFree/inside']]
  const notAloneAndFree = [...activities['/notAlone/free/outside'], ...activities['/notAlone/free/inside']]
  const notAloneAndNotFree = [...activities['/notAlone/notFree/outside'], ...activities['/notAlone/notFree/inside']]

  const sortedAloneAndFree = sort([...anyoneAndFree, ...aloneAndFree])
  const sortedAloneAndNotFree = sort([...anyoneAndNotFree, ...aloneAndNotFree])

  const sortedNotAloneAndFree = sort([...anyoneAndFree, ...notAloneAndFree])
  const sortedNotAloneAndNotFree = sort([...anyoneAndNotFree, ...notAloneAndNotFree])

  const aloneActivities = { free: sortedAloneAndFree, notFree: sortedAloneAndNotFree }
  const notAloneActivities = { free: sortedNotAloneAndFree, notFree: sortedNotAloneAndNotFree }
  return { aloneActivities, notAloneActivities }
}

function sort (arr) {
  return arr.sort((a, b) => {
    if (a.id > b.id) return 1
    if (a.id < b.id) return -1
    return 0
  })
}

export function getAllCategories (arr = []) {
  const categories = arr.reduce((obj, a) => {
    const safeCategories = a.categories || []
    safeCategories.forEach(c => {
      obj[c] = obj[c] || []
      obj[c].push(a)
    })
    return obj
  }, {})
  // if (Object.keys(categories)) categories.total = arr
  return categories || {}
}

export function slice (arr = [], start = 0, stop) {
  return arr && Array.isArray(arr) ? arr.slice(start, stop || arr.length) : arr
}

export function findCallOut (coll = [], arrayOfNames = []) {
  function iterate (test) {
    for (let i = 0; i < coll.length; i++) {
      const item = coll[i]
      if (test(item)) return item
    }
    return null
  }
  if (coll && Array.isArray(coll)) {
    const foundShowCase = iterate((item) => item.showcase === true && !arrayOfNames.includes(item.name))
    if (foundShowCase) return foundShowCase
    const foundNonSpotlight = iterate((item) => item.spotlight !== true && !arrayOfNames.includes(item.name))
    if (foundNonSpotlight) return foundNonSpotlight
    return iterate((item) => !arrayOfNames.includes(item.name))
  }
  return {}
}

export function makeDatePretty (date = new Date()) {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}

export function convertIdToDate (objectId) {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
}

export function handleName (name) {
  return name.replace(/[#]/g, '').split('<br>').join(' ')
}
