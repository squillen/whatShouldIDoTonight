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
import { slice } from '../../lib/helpers/dataHelpers'
import { stagger } from '../../animations/default'

export async function getStaticProps () {
  let all = []
  let spotlight = []

  try {
    const handleCall = (path) => callAPI(`do?${path}`).catch(console.error)
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

function DoSection ({ spotlight, all = {} }) {
  const source = 'do'
  const obj = all || {}
  const { total, active, educational, outside, free, alone, read, home, volunteer, listen, watch, calm, social, food, finance, code, tech, selfImprovement } = obj
  const contentCategories = [
    { content: slice(total), header: 'All', source, ref: useRef('All') },
    { content: slice(active), header: 'Active', source, ref: useRef('Active') },
    { content: slice(alone), header: 'Alone', source, ref: useRef('Alone') },
    { content: slice(calm), path: 'calm', header: 'Chill', source, ref: useRef('Chill') },
    { content: slice(code), header: 'Code', source, ref: useRef('Code') },
    { content: slice(food), path: 'food', header: 'Eat', source, ref: useRef('Eat') },
    { content: slice(educational), header: 'Educational', source, ref: useRef('Educational') },
    { content: slice(finance), header: 'Finance', source, ref: useRef('Finance') },
    { content: slice(free), header: 'Free', source, ref: useRef('Free') },
    { content: slice(home), header: 'Home', source, ref: useRef('Home') },
    { content: slice(listen), header: 'Listen', source, ref: useRef('Listen') },
    { content: slice(outside), header: 'Outside', source, ref: useRef('Outside') },
    { content: slice(read), path: 'read', header: 'Read & Write', source, ref: useRef('Read & Write') },
    { content: slice(selfImprovement), path: 'selfImprovement', header: 'Self Improvement', source, ref: useRef('Self Improvement') },
    { content: slice(social), header: 'Social', source, ref: useRef('Social') },
    { content: slice(tech), header: 'Tech', source, ref: useRef('Tech') },
    { content: slice(volunteer), header: 'Volunteer', source, ref: useRef('Volunteer') },
    { content: slice(watch), header: 'Watch', source, ref: useRef('Watch') }
  ]
  const findCallOut = coll => coll && Array.isArray(coll) && coll.find(item => item.spotlight !== true)
  const foodCallOut = findCallOut(food)
  const outsideCallOut = findCallOut(outside)
  const selfImprovementCallOut = findCallOut(selfImprovement)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 4).map(displayContent)
  const displayedContent2 = contentCategories.slice(4, 7).map(displayContent)
  const displayedContent3 = contentCategories.slice(7, 9).map(displayContent)
  const displayedContent4 = contentCategories.slice(9, 12).map(displayContent)
  const displayedContent5 = contentCategories.slice(12, 14).map(displayContent)
  const displayedContent6 = contentCategories.slice(14, 30).map(displayContent)
  const doTheDew = {
    header: '"Do the Dew"',
    contents: ['-Mountain Dew', 'Straight wisdom.']
  }
  const doTheImpossible = {
    header: '"Some people say nothing is impossible, but I do nothing everyday."',
    contents: ['-A.A. Milne', 'Tonight, you do the possible: something']
  }
  return (
    <Layout>
      <Head>
        <title>What to do - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        {spotlight && Array.isArray(spotlight) && spotlight.length && <SplashContent content={spotlight} banner="Stuff Worthy of Your Time" destination={source} />}
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Ideas that don&apos;t suck.</div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut item={doTheImpossible} />
        {displayedContent2}
        <ContentCallOut source={source} item={selfImprovementCallOut} />
        {displayedContent3}
        <ContentCallOut source={source} item={outsideCallOut} />
        {displayedContent4}
        <ContentCallOut item={doTheDew} />
        {displayedContent5}
        <ContentCallOut source={source} item={foodCallOut} />
        {displayedContent6}
      </div>
    </Layout>
  )
}

DoSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object
}

export default DoSection
