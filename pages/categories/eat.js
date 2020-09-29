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
  let indian = []
  let asian = []
  let american = []
  let italian = []
  let mexican = []
  let thai = []
  let japanese = []
  let chinese = []
  let dessert = []
  let recipe = []

  try {
    // spotlight = await callAPI('eat?spotlight=spotlight')
    // indian = await callAPI('eat?category=indian')
    // asian = await callAPI('eat?category=asian')
    // american = await callAPI('eat?category=american')
    // italian = await callAPI('eat?category=italian')
    // mexican = await callAPI('eat?category=mexican')
    // thai = await callAPI('eat?category=thai')
    // japanese = await callAPI('eat?category=japanese')
    // chinese = await callAPI('eat?category=chinese')
    // dessert = await callAPI('eat?category=dessert')
    // recipe = await callAPI('eat?recipe=recipe')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      indian,
      asian,
      american,
      italian,
      mexican,
      thai,
      japanese,
      chinese,
      dessert,
      recipe
    }
  }
}

function TVSection ({ spotlight, indian, asian, american, italian, mexican, thai, japanese, chinese, dessert, recipe }) {
  const source = 'eat'
  const contentCategories = [
    { content: indian, header: 'Indian', source },
    { content: asian, header: 'Asian', source },
    { content: american, header: 'American', source },
    { content: italian, header: 'Italian', source },
    { content: mexican, header: 'Mexican', source },
    { content: thai, header: 'Thai', source },
    { content: japanese, header: 'Japanese', source },
    { content: chinese, header: 'Chinese', source },
    { content: dessert, header: 'Dessert', source },
    { content: recipe, header: 'Recipes', source }
  ]
  const displayedContent = contentCategories.map(displayContent)
  return (
    <Layout>
      <Head>
        <title>What to eat - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Food worth cooking" source={source} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We found the recipes worth cooking. The diabetes was totally worth it.</div>
        </div>
        {displayedContent}
      </div>
    </Layout>
  )
}

TVSection.propTypes = {
  spotlight: PropTypes.array,
  indian: PropTypes.array,
  asian: PropTypes.array,
  american: PropTypes.array,
  italian: PropTypes.array,
  mexican: PropTypes.array,
  thai: PropTypes.array,
  japanese: PropTypes.array,
  chinese: PropTypes.array,
  dessert: PropTypes.array
}

export default TVSection
