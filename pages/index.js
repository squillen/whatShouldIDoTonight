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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NextSEO />
      <section className={utilStyles.headingMd}>
        <motion.div variants={stagger} className={utilStyles.questions}>
          {/* ARE YOU ALONE SECTION */}
          <motion.div variants={fadeInUp} className={utilStyles.question}>
            <span>
              I am alone:
            </span>
            <span>
              <select className={utilStyles.select} name="userAlone" id="userAloneSelect" onChange={handleSelect}>
                <option className={utilStyles.option} name="userAlone" value="true" id="userIsAloneTrue">Yes</option>
                <option className={utilStyles.option} name="userAlone" value="false" id="userIsAloneFalse">No</option>
              </select>
            </span>
          </motion.div>
          {/* SPEND MONEY SECTION */}
          <motion.div variants={fadeInUp} className={utilStyles.question}>
            <span>
              I am OK spending money:
            </span>
            <span>
              <select className={utilStyles.select} name="spendMoney" id="spendMoneySelect" onChange={handleSelect}>
                <option className={utilStyles.option} name="spendMoney" value="true" id="userWantsToSpendMoneyTrue">Yes</option>
                <option className={utilStyles.option} name="spendMoney" value="false" id="userWantsToSpendMoneyFalse">No</option>
              </select>
            </span>
          </motion.div>
          {/* INSIDE OR OUTSIDE SECTION */}
          <motion.div variants={fadeInUp} className={utilStyles.question}>
            <span>
              I want to go outside:
            </span>
            <span>
              <select className={utilStyles.select} name="goOutside" id="goOutsideSelect" onChange={handleSelect}>
                <option className={utilStyles.option} name="goOutside" value={3} id="userWantsToGoOutsideIndifferent">I don&apos;t care</option>
                <option className={utilStyles.option} name="goOutside" value={1} id="userWantsToGoOutsideTrue">Yes</option>
                <option className={utilStyles.option} name="goOutside" value={2} id="userWantsToGoOutsideFalse">No</option>
              </select>
            </span>
          </motion.div>
          <motion.div variants={fadeInUp} className={utilStyles.buttonContainer}>
            <Button
              inlineStyle={{ border: '3px solid #0F2956', fontSize: '1.5rem' }}
              href={`/activities${currentActivity.category}/${currentActivity.id}`}
              label="tell me"
            />
          </motion.div>
        </motion.div>
        {/* MOBILE SECTION */}
        <motion.div variants={stagger} className={utilStyles.mobileQuestions}>
          {/* ARE YOU ALONE SECTION */}
          <motion.div variants={fadeInUp} className={utilStyles.question}>
            <div>
              I am alone:
            </div>
            <div>
              <select className={utilStyles.select} name="userAlone" id="userAlone" onChange={handleSelect}>
                <option className={utilStyles.option} name="userAlone" value="true">Yes</option>
                <option className={utilStyles.option} name="userAlone" value="false">No</option>
              </select>
            </div>
          </motion.div>
          {/* SPEND MONEY SECTION */}
          <motion.div variants={fadeInUp} className={utilStyles.question}>
            <div>
              I am OK spending money:
            </div>
            <div>
              <select className={utilStyles.select} name="spendMoney" id="spendMoney" onChange={handleSelect}>
                <option className={utilStyles.option} name="spendMoney" value="true">Yes</option>
                <option className={utilStyles.option} name="spendMoney" value="false">No</option>
              </select>
            </div>
          </motion.div>
          {/* INSIDE OR OUTSIDE SECTION */}
          <motion.div variants={fadeInUp} className={utilStyles.question}>
            <div>
              I want to go outside:
            </div>
            <div>
              <select className={utilStyles.select} name="goOutside" id="goOutside" onChange={handleSelect}>
                <option className={utilStyles.option} name="goOutside" value={3}>I don&apos;t care</option>
                <option className={utilStyles.option} name="goOutside" value={1}>Yes</option>
                <option className={utilStyles.option} name="goOutside" value={2}>No</option>
              </select>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className={utilStyles.buttonContainer}>
            <Button
              inlineStyle={{ border: '3px solid #0F2956', fontSize: '1.5rem' }}
              href={`/activities${currentActivity.category}/${currentActivity.id}`}
              label="tell me"
            />
          </motion.div>
        </motion.div>
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
