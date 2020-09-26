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
  let ideas = []
  let free = []
  let comedy = []
  let drama = []
  let horror = []
  let action = []
  try {
    tvShows = await callAPI('watch?spotlight=spotlight')
    ideas = await callAPI('watch?ideas=ideas')
    comedy = await callAPI('watch?comedy=comedy')
    drama = await callAPI('watch?drama=drama')
    horror = await callAPI('watch?horror=horror')
    action = await callAPI('watch?action=action')
    free = await callAPI('watch?free=free')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      tvShows,
      ideas,
      free,
      comedy,
      drama,
      horror,
      action
    }
  }
}

function TVSection ({ tvShows, comedy, horror, free, drama, action, ideas }) {
  const destination = '/watch/show'
  const contentCategories = [
    { content: comedy, header: 'Comedy', destination },
    { content: horror, header: 'Horror', destination },
    { content: ideas, header: 'Ideas', destination },
    { content: free, header: 'Free', destination },
    { content: drama, header: 'Drama', destination },
    { content: action, header: 'Action', destination }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <div className={utilStyles.tvContainer}>
        <SplashContent content={tvShows} banner="Watch the less known" destination={destination} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We&apos;ve watched thousands of hours of less-known TV for you</div>
          <div className={utilStyles.infoBody}>
            <p>
              Totally for research.
            </p>
          </div>
        </div>
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
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default TVSection
