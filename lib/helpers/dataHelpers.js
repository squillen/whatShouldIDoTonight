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
        ...activities['/anyone/notFree/inside']
      ]
      : goOutsideAsNumber === 1 // MONEY/NO MONEY, OUTSIDE
        ? [...activities['/anyone/free/outside']]
        : [...activities['/anyone/free/inside']]

    // I DON'T WANT TO SPEND MONEY
    : goOutsideAsNumber === 3 // NO MONEY, INSIDE/OUTSIDE
      ? [
        ...activities['/anyone/free/outside'],
        ...activities['/anyone/free/inside']
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
          ...activities['/alone/notFree/outside']
        ]
        : goOutsideAsNumber === 1 // OUTSIDE
          ? [...activities['/alone/free/outside'], ...activities['/alone/notFree/outside']]
          : [...activities['/alone/free/inside'], ...activities['/alone/notFree/inside']]
      // USER DOES NOT WANT TO SPEND MONEY
      : goOutsideAsNumber === 3
        ? [
          ...activities['/alone/free/inside'],
          ...activities['/alone/free/outside']
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
          ...activities['/notAlone/notFree/outside']
        ]
        : goOutsideAsNumber === 1 // OUTSIDE
          ? [...activities['/notAlone/free/outside'], ...activities['/notAlone/notFree/outside']]
          : [...activities['/notAlone/free/inside'], ...activities['/notAlone/notFree/inside']]
      // USER DOES NOT WANT TO SPEND MONEY
      : goOutsideAsNumber === 3
        ? [
          ...activities['/notAlone/free/inside'],
          ...activities['/notAlone/free/outside']
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

export function getAllCategories (arr) {
  const categories = arr.reduce((obj, a) => {
    a.categories.forEach(c => {
      obj[c] = obj[c] || []
      obj[c].push(a)
    })
    return obj
  }, {})
  categories.all = arr
  return categories
}
