import React, { useState, useRef } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setListenActivities } from '../../src/store/categories/action'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import HandleContent from '../../components/HandleContent'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'

const pageDescription =
"We've listened to tons of less-known podcasts on Apple, Spotify, Stitcher, and more to give you suggestions about " +
'the best comedy, news, political, film / movies, educational, tech, self improvement, cultural, and food podcasts to listen to.'

const quotes = [
  {
    header: '"You aren’t learning anything when you’re talking."',
    contents: ['-Lyndon B. Johnson'],
  },
  {
    header: '"The quieter you become, the more you can hear."',
    contents: ['-Buddha'],
  },
]

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.categories.listenActivities.all || {}
  const spotlight = state.categories.listenActivities.spotlight || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('listen')
  else {
    return {
      props: {
        spotlight,
        all,
      },
    }
  }
})

function ListenSection ({ spotlight = [], all = {}, setInRedux, setListenActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setListenActivitiesFromProps({ all, spotlight })
  }
  const source = 'listen'
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
        <title>What Should I Listen To Tonight - {siteTitle}</title>
        <meta name="description" content={pageDescription} />

      </Head>
      {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Listen to the less known" source={source} />}
      <div className={utilStyles.infoContainer} ref={homeRef}>
        <div className={utilStyles.infoHeader}>Do you know how many bad podcasts are out there?</div>
        <div className={utilStyles.infoBody}>
          <p>We do. And now you don&apos;t have to.</p>
          <p>You&apos;re welcome.</p>
        </div>
      </div>
      {display}
    </Layout>
  )
}

ListenSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  setListenActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setListenActivitiesFromProps: bindActionCreators(setListenActivities, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(ListenSection)
