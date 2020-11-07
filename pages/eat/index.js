import React, { useState, useRef } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setEatActivities } from '../../src/store/categories/action'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import HandleContent from '../../components/HandleContent'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'

const pageDescription =
"What should I eat tonight? We've got suggestions. Authentic recipes and desserts for Indian, Mexican, American, " +
'Asian, Italian, Moroccan, Columbian, Peruvian, and other adventurous and less-known cuisines.'

const quotes = [
  {
    header: '"Butter"',
    contents: ['-How Paula Deen says "basil".'],
  },
  {
    header: '"The more you weigh, the harder you are to kidnap. Stay safe. Eat cake."',
    contents: ['-someone smart'],
  },
]

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.categories.eatActivities.all || {}
  const spotlight = state.categories.eatActivities.spotlight || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('eat')
  else {
    return {
      props: {
        spotlight,
        all,
      },
    }
  }
})

function EatSection ({ articles = [], spotlight = [], all = {}, setInRedux, setEatActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setEatActivitiesFromProps({ all, spotlight })
  }
  const source = 'eat'
  const obj = all || {}
  const homeRef = useRef('home')
  const display = (
    <HandleContent
      all={obj}
      articles={articles}
      source={source}
      quotes={quotes}
      homeRef={homeRef}
    />
  )

  return (
    <Layout>
      <Head>
        <title>Things To Eat Tonight - {siteTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Dishes worth eating" source={source} />}
      <div className={utilStyles.infoContainer} ref={homeRef}>
        <div className={utilStyles.infoHeader}>We found the recipes worth cooking. The diabetes was totally worth it.</div>
      </div>
      {display}
    </Layout>
  )
}

EatSection.propTypes = {
  spotlight: PropTypes.array,
  articles: PropTypes.array,
  all: PropTypes.object,
  setEatActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setEatActivitiesFromProps: bindActionCreators(setEatActivities, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(EatSection)
