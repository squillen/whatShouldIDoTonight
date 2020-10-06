import React, { useState } from 'react'
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
import HandleContent from '../../components/HandleContent'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.category.doActivities.all || {}
  const spotlight = state.category.doActivities.spotlight || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('do')
  else {
    return {
      props: {
        spotlight,
        all
      }
    }
  }
})

function DoSection ({ spotlight = [], all = {}, setInRedux, setDoActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setDoActivitiesFromProps({ all, spotlight })
  }
  const source = 'do'
  const obj = all || {}
  const quotes = [
    {
      header: '"Do the Dew"',
      contents: ['-Mountain Dew', 'Straight wisdom.']
    },
    {
      header: '"Some people say nothing is impossible, but I do nothing everyday."',
      contents: ['-A.A. Milne', 'Tonight, you do the possible: something']
    }
  ]

  const display = (
    <HandleContent
      all={obj}
      source={source}
      quotes={quotes}
    />
  )

  return (
    <Layout>
      <Head>
        <title>What to do - {siteTitle}</title>
      </Head>
      {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Stuff worthy of your time" destination={source} />}
      <div className={utilStyles.infoContainer}>
        <div className={utilStyles.infoHeader}>ideas that don&apos;t suck.</div>
      </div>
      {display}
    </Layout>
  )
}

DoSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  setDoActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.string
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDoActivitiesFromProps: bindActionCreators(setDoActivities, dispatch)
  }
}

export default connect((state) => state, mapDispatchToProps)(DoSection)
