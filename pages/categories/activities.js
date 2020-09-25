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
  const setUserActivities = () => {
    const router = useRouter()
    const { asPath = '' } = router
    const status = asPath.split('?')[1].split('=')[1]
    const allActivities = status === 'alone'
      ? aloneActivities
      : notAloneActivities
    setAllActivities(allActivities)
    let currentActivities = [...allActivities.free, ...allActivities.notFree]
    currentActivities = currentActivities.sort((a, b) => a.id - b.id)
    setCurrentActivities(currentActivities)
  }

  useEffect(() => {
    let currentActivities = []
    if (showFree && showNotFree) {
      currentActivities = [...allActivities.free, ...allActivities.notFree]
    } else if (showFree && !showNotFree) {
      currentActivities = [...allActivities.free]
    } else {
      currentActivities = [...allActivities.notFree]
    }
    currentActivities = currentActivities.sort((a, b) => {
      if (a.id > b.id) return 1
      if (a.id < b.id) return -1
      return 0
    })
    setCurrentActivities(currentActivities)
  }, [showFree, showNotFree])

  if (!allActivities) setUserActivities()
  return (
    <Layout>
      <div className={utilStyles.activitiesContainer}>
        <div className={utilStyles.options}>
          <div className={utilStyles[showFree ? 'selectedActivityOption' : 'activityOption']} onClick={() => setShowFree(!showFree)}>free</div>
          <div className={utilStyles[showNotFree ? 'selectedActivityOption' : 'activityOption']} onClick={() => setShowNotFree(!showNotFree)}>not free</div>
        </div>
        <div className={utilStyles.activities}>
          {
            currentActivities.map((activity, idx) => (
              <div className="activity" key={`${activity.id}-${idx}`}>
                <Link href={`/activities${activity.category}/${activity.id}`}>
                  <a>
                    {activity.id.split('-').join(' ')}
                  </a>
                </Link>
              </div>
            ))
          }
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
