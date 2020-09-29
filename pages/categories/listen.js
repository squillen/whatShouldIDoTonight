import React, { useState } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

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
  let comedy = []
  let technology = []
  let educational = []
  let finance = []
  let code = []
  let crime = []
  let food = []

  try {
    // spotlight = await callAPI('listen?spotlight=spotlight')
    // comedy = await callAPI('listen?category=comedy')
    // technology = await callAPI('listen?category=technology')
    // educational = await callAPI('listen?category=educational')
    // finance = await callAPI('listen?category=finance')
    // code = await callAPI('listen?category=code')
    // crime = await callAPI('listen?category=crime')
    // food = await callAPI('listen?category=food')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      comedy,
      technology,
      educational,
      finance,
      code,
      crime,
      food
    }
  }
}

function Listen ({
  spotlight,
  comedy,
  technology,
  educational,
  finance,
  code,
  crime,
  food
}) {
  const source = 'listen'
  const contentCategories1 = [
    { content: comedy, header: 'Comedy', source },
    { content: technology, header: 'Tech', source },
    { content: educational, header: 'Educational', source }
  ]

  const contentCategories2 = [
    { content: finance, header: 'Finance', source },
    { content: code, header: 'Code', source },
    { content: crime, header: 'Crime', source },
    { content: food, path: 'food-and-drink', header: 'Food & Drink', source }
  ]
  const displayedContent1 = contentCategories1.map(displayContent)
  const displayedContent2 = contentCategories2.map(displayContent)
  return (
    <Layout>
      <Head>
        <title>What to listen to - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Listen to quality" source={source} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Do you know how many bad podcasts are out there?</div>
          <div className={utilStyles.infoBody}>
            <p>We do. And now you don&apos;t have to.</p>
            <p>You&apos;re welcome.</p>
          </div>
        </div>
        {displayedContent1}
        <div className={utilStyles.sponsoredContentContainer}>
          <div className={utilStyles.sponsorTitle}>
            Curious about crime?
          </div>
          <div className={utilStyles.sponsorBody}>
            here is some sponsored content that breaks up the page!
          </div>
        </div>
        {displayedContent2}
      </div>
    </Layout>
  )
}

Listen.propTypes = {
  spotlight: PropTypes.array,
  comedy: PropTypes.array,
  technology: PropTypes.array,
  educational: PropTypes.array,
  finance: PropTypes.array,
  code: PropTypes.array,
  crime: PropTypes.array,
  food: PropTypes.array
}

export default Listen
