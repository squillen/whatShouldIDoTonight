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
    spotlight = await callAPI('listen?spotlight=spotlight')
    comedy = await callAPI('listen?comedy=comedy')
    crime = await callAPI('listen?crime=crime')
    finance = await callAPI('listen?finance=finance')
    code = await callAPI('listen?code=code')
    education = await callAPI('listen?education=education')
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
  const destination = '/listen/thing'
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
        <SplashContent content={spotlight} banner="Listen to quality" destination={destination} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Do you know how many bad podcasts are out there?</div>
          <div className={utilStyles.infoBody}>
            <p>Now you don&apos;t have to.</p>
          </div>
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
