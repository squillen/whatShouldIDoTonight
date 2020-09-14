export function getUserActivities ({ activities, userAlone, spendMoney, goOutside }) {
  console.log('goOutSide === 1 :>> ', goOutside === 1)
  console.log('goOutSide :>> ', goOutside)
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
