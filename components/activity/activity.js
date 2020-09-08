import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './activity.module.css'

// COMPONENTS
import Button from '../button/button'


// HELPERS
import getRandomActivity from '../../helpers/getRandomActivity'

export default function ThingToDo({
  userAlone,
  spendMoney,
  resetOptions,
  activities
  }) {
  const [thingToDo, setThingToDo] = useState({})
  const [thingsToDo, setThingsToDo] = useState(activities)
  const [findNewThing, setFindNewThing] = useState(false)
  // // reprimand
  // const [count, setCount] = useState(0)
  // const [showReprimand, setShowReprimand] = useState(false)

  // prepare events
  const getNewThingToDo = () => {
    let events = [...thingsToDo];
    // setCount(count + 1);
    const { newThingToDo, events: remainingEvents } = getRandomActivity({ events, userAlone, spendMoney })

    if (!events.length) {
      // setCount(0) // list starting over
    }

    setThingToDo(newThingToDo)
    setThingsToDo(remainingEvents)
  }

  // effects
  useEffect(() => {
    setFindNewThing(false)
    getNewThingToDo()
  }, [findNewThing])

  // useEffect(() => {
  //   if (count === 3) setShowReprimand(true);
  // }, [count])

  // html


  // const reprimand = (
  //   <div className={styles.modal}>
  //     yo, are you even trying these??
  //     <div className={styles.buttonsContainer}>
  //     <Button
  //       styleName="admonishOKButton"
  //       onClick={() => setShowReprimand(false)}
  //       label="No, I'm sorry"
  //     />
  //     </div>
  //   </div>
  // )

  const { header, description = [] } = thingToDo || {};
  return (
    <div className={styles.thingToDoContainer}>
      {buttons}
      <div className={styles.textContainer}>
        <div className={styles.header}>
          <div className={styles.headerText}>{header}</div>
          <div className={styles.bottomBorder} />
        </div>
        <div className={styles.description}>
          {
            description.map((el, idx) => {
              const [tag, props, display] = el;
              const propsWithKey = { ...props, key: `${tag}-${idx}` }
              return (
                React.createElement(tag, propsWithKey, display)
              )
            })
          }
        </div>
      </div>
      {/* {
        showReprimand
          ? reprimand
          : null
      } */}
    </div>
  )
}