import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import wrapper from '../src/store/store'
import { getNewUserActivity, setUserActivities } from '../src/store/activities/action'

// COMPONENTS
import Layout from '../components/layout/layout'
import Button from '../components/button/button'
import { siteTitle } from '../components/defaultHead'

// HELPERS
import utilStyles from '../styles/utils.module.css'
import { getAllActivitiesData } from '../lib/posts'
import { getUserActivities } from '../lib/helpers/dataHelpers'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const activities = getAllActivitiesData()
  // store.dispatch({ type: 'SET_ALL_ACTIVITIES', payload: activities })
  return {
    props: {
      activities
    }
  }
})

function Home (props) {
  const { activities } = props
  const [userAlone, setUserAlone] = useState(true)
  const [spendMoney, setSpendMoney] = useState(false)
  const [currentActivity, setCurrentActivity] = useState({})
  const state = useSelector(state => state)

  // EFFECTS
  useEffect(() => {
    const userActivities = getUserActivities({ activities, userAlone, spendMoney })
    props.setUserActivities(userActivities)
    props.getNewUserActivity()
  }, [userAlone, spendMoney])

  useEffect(() => {
    setCurrentActivity(state.activity.currentActivity)
  }, [state.activity.currentActivity])

  // CLICK HANDLERS
  const handleSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    const boolean = value !== 'false'
    if (name === 'userAlone') setUserAlone(boolean)
    else setSpendMoney(boolean)
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.questions}>
          <div className={utilStyles.question}>
            <span>
              I am
            </span>
            <span>
              <select className={utilStyles.select} name="userAlone" id="userAlone" onBlur={handleSelect}>
                <option className={utilStyles.option} name="userAlone" value="true">alone</option>
                <option className={utilStyles.option} name="userAlone" value="false">not alone</option>
              </select>
            </span>
          </div>
          <div className={utilStyles.question}>
            <span>
              I am
            </span>
            <span>
              <select className={utilStyles.select} name="spendMoney" id="spendMoney" onBlur={handleSelect}>
                <option className={utilStyles.option} name="spendMoney" value="false">not OK</option>
                <option className={utilStyles.option} name="spendMoney" value="true">OK</option>
              </select>
            </span>
            <span> with spending money</span>
          </div>
          <div className={utilStyles.buttonContainer}>
            <Button
              inlineStyle={{ border: '3px solid #0F2956', fontSize: '1.5rem' }}
              href={`/activities${currentActivity.category}/${currentActivity.id}`}
              label="tell me"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewUserActivity: bindActionCreators(getNewUserActivity, dispatch),
    setUserActivities: bindActionCreators(setUserActivities, dispatch)
  }
}

Home.propTypes = {
  setUserActivities: PropTypes.func,
  getNewUserActivity: PropTypes.func,
  activities: PropTypes.object
}

export default connect((state) => state, mapDispatchToProps)(Home)
