export default function getRandomActivity({ activities, userAlone, spendMoney }) {
  console.log('activities :::', activities)
  let events = []
  events = spendMoney ? [...activities['/anyone/free'], ...activities['/anyone/notFree']] : [...activities['/anyone/free']]
  const userSpecificEvents = userAlone
    ? spendMoney
      ? [...activities['/alone/free'], ...activities['/alone/notFree']]
      : [...activities['/alone/free']]
    : spendMoney
      ? [...activities['/notAlone/free'], ...activities['/notAlone/notFree']]
      : [...activities['/notAlone/free']];
  events = [...events, ...userSpecificEvents];
  const randomIndex = Math.floor(Math.random() * events.length - 1)
  const newThingToDo = events.splice(randomIndex, 1)[0]
  console.log('newThingToDO', newThingToDo)
  return {events, newThingToDo}
}