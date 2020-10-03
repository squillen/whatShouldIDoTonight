import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import ContentCallOut from '../../components/ContentCallOut/ContentCallOut'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import displayContent from '../../lib/helpers/displayContent'
import displayCategoryOptions from '../../lib/helpers/displayCategoryOptions'
import { stagger } from '../../animations/default'
import { slice } from '../../lib/helpers/dataHelpers'

export async function getStaticProps () {
  let spotlight = []
  let all = []

  try {
    const handleCall = (path) => callAPI(`eat?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('all=all')
    ])
    spotlight = promises[0]
    all = promises[1]
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      all
    }
  }
}

function EatSection ({ spotlight, all }) {
  const obj = all || {}
  const { indian, asian, american, italian, mexican, thai, japanese, chinese, dessert, recipe } = obj
  const source = 'eat'
  const contentCategories = [
    { content: slice(all), header: 'All', source, ref: useRef('All') },
    { content: slice(indian), header: 'Indian', source, ref: useRef('Indian') },
    { content: slice(asian), header: 'Asian', source, ref: useRef('Asian') },
    { content: slice(american), header: 'American', source, ref: useRef('American') },
    { content: slice(italian), header: 'Italian', source, ref: useRef('Italian') },
    { content: slice(mexican), header: 'Mexican', source, ref: useRef('Mexican') },
    { content: slice(thai), header: 'Thai', source, ref: useRef('Thai') },
    { content: slice(japanese), header: 'Japanese', source, ref: useRef('Japanese') },
    { content: slice(chinese), header: 'Chinese', source, ref: useRef('Chinese') },
    { content: slice(dessert), header: 'Dessert', source, ref: useRef('Dessert') },
    { content: slice(recipe), header: 'Recipes', source, ref: useRef('Recipes') }
  ]
  const findCallOut = coll => coll && Array.isArray(coll) && coll.find(item => item.spotlight !== true)
  const italianCallOut = findCallOut(italian)
  const japaneseCallOut = findCallOut(japanese)
  const dessertCallOut = findCallOut(dessert)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 3).map(displayContent)
  const displayedContent2 = contentCategories.slice(3, 6).map(displayContent)
  const displayedContent3 = contentCategories.slice(6, 9).map(displayContent)
  const displayedContent4 = contentCategories.slice(9, 12).map(displayContent)
  const displayedContent5 = contentCategories.slice(12, 14).map(displayContent)
  const displayedContent6 = contentCategories.slice(14, 30).map(displayContent)
  const doTheDew = {
    header: '"Butter"',
    contents: ['-How Paula Deen says "basil".']
  }
  const justDoIt = {
    header: '"The more you weigh, the harder you are to kidnap. Stay safe. Eat cake."',
    contents: ['-someone smart']
  }
  return (
    <Layout>
      <Head>
        <title>What to eat - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        {spotlight && <SplashContent content={spotlight} banner="Hand-picked dishes" source={source} />}
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We found the recipes worth cooking. The diabetes was totally worth it.</div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut item={doTheDew} />
        {displayedContent2}
        <ContentCallOut source={source} item={dessertCallOut} />
        {displayedContent3}
        <ContentCallOut source={source} item={italianCallOut} />
        {displayedContent4}
        <ContentCallOut item={justDoIt} />
        {displayedContent5}
        <ContentCallOut source={source} item={japaneseCallOut} />
        {displayedContent6}
      </div>
    </Layout>
  )
}

EatSection.propTypes = {
  all: PropTypes.object,
  spotlight: PropTypes.array
}

export default EatSection
