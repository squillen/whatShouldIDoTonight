import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import wrapper from '../src/store/store'
import { getNewUserActivity, setUserActivities, setAllActivities } from '../src/store/activities/action'

// COMPONENTS
import Layout from '../components/layout/layout'
import NextSEO from '../components/nextSEO'
import { siteTitle } from '../components/defaultHead'
import RandomGenerator from '../components/RandomGenerator/RandomGenerator'

// HELPERS
import { getAllActivitiesData } from '../lib/posts'
import { sortActivities } from '../lib/helpers/dataHelpers'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const activities = getAllActivitiesData()
  const { aloneActivities, notAloneActivities } = sortActivities(activities)
  return {
    props: {
      activities,
      aloneActivities,
      notAloneActivities,
    },
  }
})

function Home (props) {
  const { activities, aloneActivities, notAloneActivities } = props
  const [firstLoad, setFirstLoad] = useState(true)
  useEffect(() => {
    if (firstLoad) {
      props.setAllActivities({ activities, aloneActivities, notAloneActivities })
      setFirstLoad(false)
    }
  }, firstLoad)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <NextSEO />
      <RandomGenerator activities={activities} />
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewUserActivity: bindActionCreators(getNewUserActivity, dispatch),
    setUserActivities: bindActionCreators(setUserActivities, dispatch),
    setAllActivities: bindActionCreators(setAllActivities, dispatch),
  }
}

Home.propTypes = {
  setUserActivities: PropTypes.func,
  setAllActivities: PropTypes.func,
  getNewUserActivity: PropTypes.func,
  activities: PropTypes.object,
  aloneActivities: PropTypes.object,
  notAloneActivities: PropTypes.object,
}

export default connect((state) => state, mapDispatchToProps)(Home)
