import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import wrapper from '../../src/store/store'
import { getNewUserActivity, setUserActivities } from '../../src/store/activities/action'

// COMPONENTS
import Layout from '../../components/layout/layout'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getAllActivitiesData } from '../../lib/posts'

export const getStaticProps = wrapper.getStaticProps(() => {
  const activities = getAllActivitiesData()
  const anyoneAndFree = [...activities['/anyone/free/outside'], ...activities['/anyone/free/inside']]
  const anyoneAndNotFree = [...activities['/anyone/notFree/outside'], ...activities['/anyone/notFree/inside']]
  const aloneAndFree = [...activities['/alone/free/outside'], ...activities['/alone/free/inside']]
  const aloneAndNotFree = [...activities['/alone/notFree/outside'], ...activities['/alone/notFree/inside']]
  const notAloneAndFree = [...activities['/notAlone/free/outside'], ...activities['/notAlone/free/inside']]
  const notAloneAndNotFree = [...activities['/notAlone/notFree/outside'], ...activities['/notAlone/notFree/inside']]

  const aloneActivities = { free: [...anyoneAndFree, ...aloneAndFree], notFree: [...anyoneAndNotFree, ...aloneAndNotFree] }
  const notAloneActivities = { free: [...anyoneAndFree, ...notAloneAndFree], notFree: [...anyoneAndNotFree, ...notAloneAndNotFree] }
  return {
    props: {
      activities,
      aloneActivities,
      notAloneActivities
    }
  }
})

function Activities ({ aloneActivities, notAloneActivities }) {
  const [allActivities, setAllActivities] = useState(null)
  const [currentActivities, setCurrentActivities] = useState([])
  const [showFree, setShowFree] = useState(true)
  const [showNotFree, setShowNotFree] = useState(true)
  const [userAlone, setUserAlone] = useState(true)
  function sort (arr) {
    return arr.sort((a, b) => {
      if (a.id > b.id) return 1
      if (a.id < b.id) return -1
      return 0
    })
  }
  const setUserActivities = () => {
    const router = useRouter()
    const { asPath = '' } = router
    const status = asPath.split('?')[1].split('=')[1]
    const userIsAlone = status === 'alone'
    const allActivities = userIsAlone
      ? aloneActivities
      : notAloneActivities
    setAllActivities(allActivities)
    setUserAlone(userIsAlone)
    let currentActivities = [...allActivities.free, ...allActivities.notFree]
    currentActivities = sort(currentActivities)
    setCurrentActivities(currentActivities)
  }

  useEffect(() => {
    const newActivities = userAlone ? aloneActivities : notAloneActivities
    let currentActivities = []
    if (showFree) currentActivities = [...newActivities.free]
    if (showNotFree) currentActivities = [...currentActivities, ...newActivities.notFree]
    currentActivities = sort(currentActivities)
    setCurrentActivities(currentActivities)
  }, [showFree, showNotFree, userAlone])

  if (!allActivities) setUserActivities()
  const cancelButton = <i className="fas fa-times"></i>
  return (
    <Layout>
      <div className={utilStyles.activitiesContainer}>
        <div className={utilStyles.activityOptions}>
          <div
            className={utilStyles[showFree ? 'selectedActivityOption' : 'activityOption']}
            onClick={() => showNotFree === false ? () => {} : setShowFree(!showFree)}
          >
            <div>free</div>
            {showFree ? cancelButton : null}
          </div>
          <div
            className={utilStyles[showNotFree ? 'selectedActivityOption' : 'activityOption']}
            onClick={() => showFree === false ? () => {} : setShowNotFree(!showNotFree)}
          >
            <div>not free</div>
            {showNotFree ? cancelButton : null}
          </div>
          <div
            className={utilStyles[userAlone ? 'selectedActivityOption' : 'activityOption']}
            onClick={() => setUserAlone(true)}
          >
            <div>alone</div>
            {userAlone ? cancelButton : null}
          </div>
          <div
            className={utilStyles[!userAlone ? 'selectedActivityOption' : 'activityOption']}
            onClick={() => setUserAlone(false)}
          >
            <div>not alone</div>
            {!userAlone ? cancelButton : null}
          </div>
        </div>
        <div className={utilStyles.activities}>
          <ol>
            {
              currentActivities.map((activity, idx) => (
                <li className="activity" key={`${activity.id}-${idx}`}>
                  <Link href={`/activities${activity.category}/${activity.id}`}>
                    <a>
                      {activity.id.split('-').join(' ')}
                    </a>
                  </Link>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    </Layout>
  )
}

Activities.propTypes = {
  activities: PropTypes.object,
  aloneActivities: PropTypes.object,
  notAloneActivities: PropTypes.object
}

export default connect((state) => state)(Activities)
