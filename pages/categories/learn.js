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
  let spotlight = []
  let art = []
  let code = []
  let free = []
  let finance = []
  let cook = []

  try {
    spotlight = await callAPI('learn?spotlight=spotlight')
    art = await callAPI('learn?art=art')
    code = await callAPI('learn?code=code')
    free = await callAPI('learn?free=free')
    finance = await callAPI('learn?finance=finance')
    cook = await callAPI('learn?cook=cook')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      art,
      code,
      free,
      finance,
      cook
    }
  }
}

function TVSection ({ spotlight, art, code, free, finance, cook }) {
  const destination = '/learn/course'
  const contentCategories = [
    { content: art, header: 'Art', destination },
    { content: code, header: 'Coding', destination },
    { content: finance, header: 'Finance', destination },
    { content: free, header: 'Free', destination },
    { content: cook, header: 'Cooking', destination }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Be better than yesterday" destination={destination} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Hand-picked courses that&apos;re worth the watch.</div>
          {/* <div className={utilStyles.infoBody}>
            <p>
              Don&apos;t waste your time trying to figure out which courses to sign up for tonight. We&apos;ve wasted our time for you.
            </p>
            <p>You&apos;re welcome.</p>
          </div> */}
        </div>
        {displayedContent}
      </div>
    </Layout>
  )
}

TVSection.propTypes = {
  spotlight: PropTypes.array,
  art: PropTypes.array,
  code: PropTypes.array,
  finance: PropTypes.array,
  cook: PropTypes.array,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default TVSection
