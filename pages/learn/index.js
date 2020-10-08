import React, { useState, useRef } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setLearnActivities } from '../../src/store/categories/action'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import HandleContent from '../../components/HandleContent'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'

const pageDescription =
"We've taken tons of online courses on Skillshare, edX, Coursera, Udemy, Pluralsight, and more to give you the best " +
'suggestions about what to take to learn about how to cook, code draw, design, and improve yourself or your company.'

const quotes = [
  {
    header: '"Never let formal education get in the way of your learning."',
    contents: ['-Mark Twain'],
  },
  {
    header: '"If you come to a fork in the road, take it."',
    contents: ['-Yogi Berra'],
  },
  {
    header: '"Any fool can know. The point is to understand."',
    contents: ['-Albert Einstein', 'What a genius.'],
  },
]

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.categories.learnActivities.all || {}
  const spotlight = state.categories.learnActivities.spotlight || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('learn')
  else {
    return {
      props: {
        spotlight,
        all,
      },
    }
  }
})

function LearnSection ({ spotlight = [], all = {}, setInRedux, setLearnActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setLearnActivitiesFromProps({ all, spotlight })
  }
  const source = 'learn'
  const obj = all || {}
  const homeRef = useRef('home')
  const display = (
    <HandleContent
      all={obj}
      source={source}
      quotes={quotes}
      homeRef={homeRef}
    />
  )

  return (
    <Layout>
      <Head>
        <title>What Should I Learn Tonight - {siteTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Be better than yesterday" source={source} />}
      <div className={utilStyles.infoContainer} ref={homeRef}>
        <div className={utilStyles.infoHeader}>Hand-picked courses worth the watch.</div>
      </div>
      {display}
    </Layout>
  )
}

LearnSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  setLearnActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLearnActivitiesFromProps: bindActionCreators(setLearnActivities, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(LearnSection)
