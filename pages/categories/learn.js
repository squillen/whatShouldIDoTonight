import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import { siteTitle } from '../../components/defaultHead'

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
  let food = []
  let personal = []

  try {
    // spotlight = await callAPI('learn?spotlight=spotlight')
    // free = await callAPI('learn?free=free')
    // art = await callAPI('learn?category=art')
    // code = await callAPI('learn?category=code')
    // finance = await callAPI('learn?category=finance')
    // food = await callAPI('learn?category=food')
    // personal = await callAPI('learn?category=personal')
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
      food,
      personal
    }
  }
}

function TVSection ({ spotlight = [], art, code, free, finance, food, personal }) {
  const source = 'learn'
  const contentCategories = [
    { content: art, header: 'Art', source },
    { content: code, header: 'Coding', source },
    { content: personal, header: 'Self Improvement', source },
    { content: finance, header: 'Finance', source },
    { content: free, header: 'Free', source },
    { content: food, header: 'Food & Drink', source }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <Head>
        <title>What to learn - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Be better than yesterday" source={source} />
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
  food: PropTypes.array,
  personal: PropTypes.array,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default TVSection
