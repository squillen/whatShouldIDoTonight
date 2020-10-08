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
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'

const pageDescription = `
Wondering what should I watch tonight? We've watched tons of less-known shows, movies, and binge-worthy series.
Whether you're in the mood for comedy, thrillers, horror, drama, documentary, crime, history, food, action, adventure, romance, rom com, mystery, or more,
we've got good (nay, amazing!) suggestions for you.
`

const quotes = [
  {
    header: '"Everyone has a purpose in life. Perhaps yours is watching television."',
    contents: ['-David Letterman', 'Absolutely inspiring.'],
  },
  {
    header: '"I really like watching TV at home."',
    contents: ['-Fred Armisen'],
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
  if (spotlight && !spotlight.length) return getActivitiesFromDB('watch')
  else {
    return {
      props: {
        spotlight,
        all,
      },
    }
  }
})

function WatchSection ({ spotlight = [], all = {}, setInRedux, setWatchActivitiesFromProps }) {
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
      source={source}
      quotes={quotes}
      homeRef={homeRef}
    />
  )

  return (
    <Layout>
      <Head>
        <title>What Should I Watch Tonight - {siteTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Watch the less known" source={source} />}
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