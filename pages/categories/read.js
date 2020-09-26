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
  let education = []

  try {
    spotlight = await callAPI('books?spotlight=spotlight')
    comedy = await callAPI('books?comedy=comedy')
    crime = await callAPI('books?crime=crime')
    finance = await callAPI('books?finance=finance')
    education = await callAPI('books?education=education')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      comedy,
      crime,
      finance,
      education
    }
  }
}

function TVSection ({ spotlight, comedy, code, crime, finance, education }) {
  const destination = '/read/thing'
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
        <SplashContent content={spotlight} banner="Books worth reading" destination={destination} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We&apos;ve read tons of books for you.</div>
          <div className={utilStyles.infoBody}>
            <p>
              You owe us so big.
            </p>
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
