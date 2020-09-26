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
  let comedy = []
  let crime = []
  let finance = []
  let code = []
  let education = []

  try {
    spotlight = await callAPI('do?spotlight=spotlight')
    comedy = await callAPI('do?comedy=comedy')
    crime = await callAPI('do?crime=crime')
    finance = await callAPI('do?finance=finance')
    code = await callAPI('do?code=code')
    education = await callAPI('do?education=education')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      comedy,
      code,
      crime,
      finance,
      education
    }
  }
}

function TVSection ({ spotlight, comedy, code, crime, finance, education }) {
  const destination = '/do/activity'
  const contentCategories = [
    { content: comedy, header: 'Comedy', destination },
    { content: code, header: 'Code', destination },
    { content: finance, header: 'Finance', destination },
    { content: crime, header: 'Crime', destination },
    { content: education, header: 'Education', destination }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Do fun shit" destination={destination} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Stuff you can do right now.</div>
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
  comedy: PropTypes.array,
  code: PropTypes.array,
  crime: PropTypes.array,
  finance: PropTypes.array,
  education: PropTypes.array
}

export default TVSection
