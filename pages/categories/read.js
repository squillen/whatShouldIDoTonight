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
  let free = []
  let autoBio = []
  let crime = []
  let history = []
  let personal = []
  let finance = []
  let food = []
  let selfImprovement = []

  try {
    spotlight = await callAPI('read?spotlight=spotlight')
    free = await callAPI('read?free=free')
    autoBio = await callAPI('read?category=autoBio')
    crime = await callAPI('read?category=crime')
    history = await callAPI('read?category=history')
    personal = await callAPI('read?category=personal')
    finance = await callAPI('read?category=finance')
    food = await callAPI('read?category=food')
    selfImprovement = await callAPI('read?category=selfImprovement')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      free,
      autoBio,
      crime,
      history,
      personal,
      finance,
      food,
      selfImprovement
    }
  }
}

function TVSection ({ spotlight, free, autoBio, crime, history, personal, finance, food, selfImprovement }) {
  const source = 'read'
  const contentCategories = [
    { content: autoBio, header: 'Autobiography', source },
    { content: free, header: 'Free', source },
    { content: crime, header: 'Crime', source },
    { content: history, header: 'History', source },
    { content: personal, header: 'Personal', source },
    { content: finance, header: 'Finance', source },
    { content: food, header: 'Food', source },
    { content: selfImprovement, header: 'Self Improvement', source }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <Head>
        <title>What to read - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Books worth reading" source={source} />
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
  free: PropTypes.array,
  autoBio: PropTypes.array,
  code: PropTypes.array,
  crime: PropTypes.array,
  finance: PropTypes.array,
  history: PropTypes.array,
  personal: PropTypes.array,
  food: PropTypes.array,
  selfImprovement: PropTypes.array
}

export default TVSection
