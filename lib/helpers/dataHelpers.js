export function getUserActivities ({ activities, userAlone, spendMoney }) {
  let userActivities = []
  userActivities = spendMoney ? [...activities['/anyone/free'], ...activities['/anyone/notFree']] : [...activities['/anyone/free']]
  const userSpecificEvents = userAlone
    ? spendMoney
      ? [...activities['/alone/free'], ...activities['/alone/notFree']]
      : [...activities['/alone/free']]
    : spendMoney
      ? [...activities['/notAlone/free'], ...activities['/notAlone/notFree']]
      : [...activities['/notAlone/free']]
  userActivities = [...userActivities, ...userSpecificEvents]
  return userActivities
}
