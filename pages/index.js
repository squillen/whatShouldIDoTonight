import React, { useState } from 'react'
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
import { siteTitle } from '../components/defaultHead'
import RandomGenerator from '../components/RandomGenerator/RandomGenerator'
import SplashContent from '../components/SplashContent/SplashContent'

// HELPERS
import utilStyles from '../styles/utils.module.css'
import { getAllActivitiesData } from '../lib/posts'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const activities = getAllActivitiesData()
  return {
    props: {
      activities
    }
  }
})

function Home ({ activities }) {
  const todaysArticles = [
    activities['/alone/notFree/inside'][2],
    activities['/alone/notFree/inside'][3],
    activities['/alone/notFree/inside'][4]
  ]
  console.log('activities :>> ', activities)
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NextSEO />
      <SplashContent todaysArticles={todaysArticles} />
      {/* <RandomGenerator activities={activities} /> */}
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
