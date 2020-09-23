import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Head from 'next/head'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import wrapper from '../src/store/store'
import { getNewUserActivity, setUserActivities } from '../src/store/activities/action'

// COMPONENTS
import Layout from '../components/layout/layout'
import NextSEO from '../components/nextSEO'
import Button from '../components/button/button'
import { siteTitle } from '../components/defaultHead'

// HELPERS
import utilStyles from '../styles/utils.module.css'
import { fadeInUp, stagger } from '../animations/default'
import { getAllActivitiesData } from '../lib/posts'
import { getUserActivities } from '../lib/helpers/dataHelpers'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const activities = getAllActivitiesData()
  return {
    props: {
      activities
    }
  }
})

function Home (props) {
  const { activities } = props
  const [userAlone, setUserAlone] = useState(true)
  const [spendMoney, setSpendMoney] = useState(true)
  const [goOutside, setGoOutside] = useState(3)
  const [openModal, setOpenModal] = useState(false)
  const [currentActivity, setCurrentActivity] = useState({})
  const state = useSelector(state => state)

  // EFFECTS
  useEffect(() => {
    const userActivities = getUserActivities({ activities, userAlone, spendMoney, goOutside })
    props.setUserActivities(userActivities)
    props.getNewUserActivity()
  }, [userAlone, spendMoney, goOutside])

  useEffect(() => {
    setCurrentActivity(state.activity.currentActivity)
  }, [state.activity.currentActivity])

  // CLICK HANDLERS
  const handleSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    const boolean = value !== 'false'
    if (name === 'userAlone') setUserAlone(boolean)
    else if (name === 'goOutside') setGoOutside(value)
    else setSpendMoney(boolean)
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NextSEO />
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.questions}>
          {/* ARE YOU ALONE SECTION */}
          <div className={utilStyles.question}>
            <div className={utilStyles.questionHeader}>
              I am alone:
            </div>
            <div className={utilStyles.twoOptions}>
              <div
                onClick={() => setUserAlone(true)}
                className={utilStyles[userAlone === true ? 'selectedOption' : 'option']}
              >
                Yes
              </div>
              <div
                onClick={() => setUserAlone(false)}
                className={utilStyles[userAlone === true ? 'option' : 'selectedOption']}
              >
                No
              </div>
            </div>
          </div>
          {/* SPEND MONEY SECTION */}
          <div className={utilStyles.question}>
            <div className={utilStyles.questionHeader}>
              I am OK spending money:
            </div>
            <div className={utilStyles.twoOptions}>
              <div
                onClick={() => setSpendMoney(true)}
                className={utilStyles[spendMoney === true ? 'selectedOption' : 'option']}
              >
                Yes
              </div>
              <div
                onClick={() => setSpendMoney(false)}
                className={utilStyles[spendMoney === true ? 'option' : 'selectedOption']}
              >
                No
              </div>
            </div>
          </div>
          {/* INSIDE OR OUTSIDE SECTION */}
          <div className={utilStyles.question}>
            <div className={utilStyles.questionHeader}>
              I want to go outside:
            </div>
            <div className={utilStyles.threeOptions}>
              <div
                onClick={() => setGoOutside(3)}
                className={utilStyles[goOutside === 3 ? 'selectedOfThree' : 'oneOfThreeOptions']}
              >
                Either
              </div>
              <div
                onClick={() => setGoOutside(1)}
                className={utilStyles[goOutside === 1 ? 'selectedOfThree' : 'oneOfThreeOptions']}
              >
                Yes
              </div>
              <div
                onClick={() => setGoOutside(2)}
                className={utilStyles[goOutside === 2 ? 'selectedOfThree' : 'oneOfThreeOptions']}
              >
                No
              </div>
            </div>
          </div>
          <div className={utilStyles.buttonContainer}>
            <Button
              customStyle={utilStyles.tellMeButton}
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
