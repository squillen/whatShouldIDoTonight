import React, { useState } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setReadActivities } from '../../src/store/categories/action'

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
  const all = state.category.readActivities.all || {}
  const spotlight = state.category.readActivities.spotlight || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('read')
  else {
    return {
      props: {
        spotlight,
        all
      }
    }
  }
})

function ReadSection ({ spotlight = [], all = {}, setInRedux, setReadActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setReadActivitiesFromProps({ all, spotlight })
  }
  const source = 'read'
  const obj = all || {}
  const quotes = [
    {
      header: '"The cure for boredom is curiosity. There is no cure for curiosity."',
      contents: ['-Dorothy Parker']
    },
    {
      header: '"To steal ideas from one person is plagiarism; to steal from many is research."',
      contents: ['-Steven Wright']
    },
    {
      header: '"Even the genius asks questions."',
      contents: ['-Tupac Shakur']
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
        <title>What to Read - {siteTitle}</title>
      </Head>
      {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Read more better" source={source} />}
      <div className={utilStyles.infoContainer}>
        <div className={utilStyles.infoHeader}>We&apos;ve read tons of books for you.</div>
        <div className={utilStyles.infoBody}>
          <p>
            You owe us so big.
          </p>
        </div>
      </div>
      {display}
    </Layout>
  )
}

ReadSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  setReadActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.string
}

const mapDispatchToProps = (dispatch) => {
  return {
    setReadActivitiesFromProps: bindActionCreators(setReadActivities, dispatch)
  }
}

export default connect((state) => state, mapDispatchToProps)(ReadSection)
