import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDoActivities } from '../../src/store/categories/action'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import ArticleContent from '../../components/ArticleContent/ArticleContent'
import HandleContent from '../../components/HandleContent'
import DefaultHead, { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'
import NextSEO from '../../components/nextSEO'

const quotes = [
  {
    header: '"Do the Dew"',
    contents: ['-Mountain Dew', 'Straight wisdom.'],
  },
  {
    header: '"Some people say nothing is impossible, but I do nothing everyday."',
    contents: ['-A.A. Milne', 'Tonight, you do the possible: something'],
  },
]

const description = 'Drink recipes, board games, free games, self improvement, be a better you, recipes to try.'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.categories.doActivities.all || {}
  const spotlight = state.categories.doActivities.spotlight || []
  const latest = state.categories.doActivities.latest || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('do')
  else {
    return {
      props: {
        spotlight,
        all,
        latest,
      },
    }
  }
})

function DoSection ({ spotlight = [], latest, all = {}, setInRedux, setDoActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  useEffect(() => {
    if (!updatedRedux && setInRedux) {
      setUpdatedRedux(true)
      setDoActivitiesFromProps({ all, spotlight, latest })
    }
  }, [updatedRedux, setInRedux])
  const source = 'do'
  const obj = all || {}
  const homeRef = useRef('home')
  const display = (
    <HandleContent
      all={obj}
      // showCategories={false}
      source={source}
      quotes={quotes}
      homeRef={homeRef}
    />
  )
  return (
    <Layout>
      <NextSEO title={`Things to Do Tonight - ${siteTitle}`} description={description} url="https://whatshouldidotonight.com/do" />
      {/* <DefaultHead title={`Things to Do Tonight - ${siteTitle}`} description={description} /> */}
      {
        spotlight && Array.isArray(spotlight) && spotlight.length
          ? (
            <SplashContent
              content={spotlight}
              banner="Do More With Your Night"
              source={source}
            />
          )
          : null
      }
      {
        latest
          ? <ArticleContent articles={latest} banner="THE LATEST" source={source} />
          : null
      }
      <div className={utilStyles.infoContainer} ref={homeRef}>
        <div className={utilStyles.infoHeader}>Your night just got a whole lot better</div>
      </div>
      {display}
    </Layout>
  )
}

DoSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  articles: PropTypes.array,
  setDoActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDoActivitiesFromProps: bindActionCreators(setDoActivities, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(DoSection)
