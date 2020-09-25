import React, { useState } from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import displayContent from '../../lib/helpers/displayContent'

export async function getStaticProps () {
  let tvShows = []
  let free = []
  let comedy = []
  let drama = []
  let horror = []
  let action = []
  try {
    tvShows = await callAPI('tv')
    comedy = await callAPI('tv?comedy=comedy')
    drama = await callAPI('tv?drama=drama')
    horror = await callAPI('tv?horror=horror')
    action = await callAPI('tv?action=action')
    free = await callAPI('tv?free=free')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      tvShows,
      free,
      comedy,
      drama,
      horror,
      action
    }
  }
}

function TVSection ({ tvShows, comedy, horror, free, drama, action }) {
  const contentCategories = [
    { content: comedy, header: 'Comedy' },
    { content: horror, header: 'Horror' },
    { content: free, header: 'Free' },
    { content: drama, header: 'Drama' },
    { content: action, header: 'Action' }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <div className={utilStyles.tvContainer}>
        <SplashContent content={tvShows} banner="Only Watch the Best" />
        {displayedContent}
      </div>
    </Layout>
  )
}

TVSection.propTypes = {
  tvShows: PropTypes.array,
  comedy: PropTypes.array,
  drama: PropTypes.array,
  action: PropTypes.array,
  horror: PropTypes.array,
  free: PropTypes.array
}

export default TVSection
