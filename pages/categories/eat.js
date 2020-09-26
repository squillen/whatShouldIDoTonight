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
  let indian = []
  let asian = []
  let american = []
  let italian = []
  let mexican = []

  try {
    spotlight = await callAPI('eat?spotlight=spotlight')
    indian = await callAPI('eat?indian=indian')
    asian = await callAPI('eat?asian=asian')
    american = await callAPI('eat?american=american')
    italian = await callAPI('eat?italian=italian')
    mexican = await callAPI('eat?mexican=mexican')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      indian,
      italian,
      asian,
      american,
      mexican
    }
  }
}

function TVSection ({ spotlight, indian, italian, asian, american, mexican }) {
  const destination = '/eat/dish'
  const contentCategories = [
    { content: indian, header: 'Indian', destination },
    { content: italian, header: 'Italian', destination },
    { content: american, header: 'American', destination },
    { content: asian, header: 'Asian', destination },
    { content: mexican, header: 'Mexican', destination }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Food worth cooking" destination={destination} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We found the recipes worth cooking. The diabetes was worth it.</div>
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
  indian: PropTypes.array,
  italian: PropTypes.array,
  asian: PropTypes.array,
  american: PropTypes.array,
  mexican: PropTypes.array
}

export default TVSection
