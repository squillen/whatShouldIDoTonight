import React, { useState, useRef } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setWatchActivities } from '../../src/store/categories/action'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import HandleContent from '../../components/HandleContent'
import DefaultHead, { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'
import NextSEO from '../../components/nextSEO'

const pageDescription =
"Get ideas of things to do when you're bored. We've watched tons of less-known, hidden gem shows, movies, and binge-worthy series on Netflix, Hulu, Prime. " +
'Comedy, thrillers, horror, drama, documentary, crime, history, food, action, adventure, romance, rom com, mystery, and more.'

const quotes = [
  {
    header: '"Everyone has a purpose in life. Perhaps yours is watching television."',
    contents: ['-David Letterman', 'Absolutely inspiring. Dick.'],
  },
  {
    header: '"I really like watching TV at home."',
    contents: ['-Fred Armisen', 'We knew that man was a genius.'],
  },
  {
    header: '"I live for watching TV and partying with my book club."',
    contents: ['-Lauren Lapkus', 'Truth.'],
  },
]

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.categories.watchActivities.all || {}
  const spotlight = state.categories.watchActivities.spotlight || []
  const articles = state.categories.watchActivities.articles || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('watch')
  else {
    return {
      props: {
        spotlight,
        all,
        articles,
      },
    }
  }
})

function WatchSection ({ spotlight = [], all = {}, articles = [], setInRedux, setWatchActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setWatchActivitiesFromProps({ all, spotlight })
  }
  const source = 'watch'
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
      <NextSEO
        url="https://whatshouldidotonight.com/watch"
        title="Things To Watch Tonight"
        description={pageDescription}
      />
      {/* <DefaultHead title="Things To Watch Tonight" description={pageDescription} /> */}
      {
        spotlight && Array.isArray(spotlight) && spotlight.length
          ? <SplashContent content={spotlight} banner="Watch the less known" source={source} />
          : null
      }
      {/* {
        articles && Array.isArray(articles) && articles.length
          ? <ArticleContent articles={articles} banner="THE LATEST" source={source} />
          : null
      } */}
      <div className={utilStyles.infoContainer} ref={homeRef}>
        <div className={utilStyles.infoHeader}>We&apos;ve watched thousands of hours of less-known TV for you.</div>
        <div className={utilStyles.infoBody}>
          <p>Totally for research.</p>
        </div>
      </div>
      {display}
    </Layout>
  )
}

WatchSection.propTypes = {
  spotlight: PropTypes.array,
  articles: PropTypes.array,
  all: PropTypes.object,
  setWatchActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setWatchActivitiesFromProps: bindActionCreators(setWatchActivities, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(WatchSection)
