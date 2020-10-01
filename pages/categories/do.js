import React, { useState, useRef } from 'react'
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

export async function getStaticProps () {
  let all = []
  let spotlight = []
  let food = []
  let finance = []
  let code = []
  let educational = []
  let tech = []
  let selfImprovement = []
  let social = []
  let home = []
  let volunteer = []
  let listen = []
  let watch = []
  let calm = []
  let alone = []
  let read = []
  let free = []
  let outside = []
  let active = []

  try {
    const handleCall = (path) => callAPI(`do?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('?spotlight=spotlight'),
      handleCall('?limit=10&all=all'),
      handleCall('?limit=10&category=food'),
      handleCall('?limit=10&category=educational'),
      handleCall('?limit=10&category=listen'),
      handleCall('?free=free'),
      handleCall('?limit=10&category=calm'),
      handleCall('?limit=10&category=alone'),
      handleCall('?limit=10&category=watch'),
      handleCall('?limit=10&category=volunteer'),
      handleCall('?limit=10&category=home'),
      handleCall('?limit=10&category=read'),
      handleCall('?limit=10&category=social'),
      handleCall('?limit=10&category=finance'),
      handleCall('?limit=10&category=code'),
      handleCall('?limit=10&category=tech'),
      handleCall('?limit=10&category=outside'),
      handleCall('?limit=10&category=active'),
      handleCall('?limit=10&category=selfImprovement')
    ])
    spotlight = promises[0]
    all = promises[1]
    food = promises[2]
    educational = promises[3]
    listen = promises[4]
    free = promises[5]
    calm = promises[6]
    alone = promises[7]
    watch = promises[8]
    volunteer = promises[9]
    home = promises[10]
    read = promises[11]
    social = promises[12]
    finance = promises[13]
    code = promises[14]
    tech = promises[15]
    outside = promises[16]
    active = promises[17]
    selfImprovement = promises[18]
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      all,
      food,
      outside,
      active,
      listen,
      calm,
      free,
      alone,
      watch,
      read,
      home,
      social,
      volunteer,
      finance,
      code,
      tech,
      educational,
      selfImprovement
    }
  }
}

function DoSection ({ spotlight, all, active, educational, outside, free, alone, read, home, volunteer, listen, watch, calm, social, food, finance, code, tech, selfImprovement }) {
  const source = 'do'
  const contentCategories = [
    { content: all, header: 'All', source, ref: useRef('All') },
    { content: active, header: 'Active', source, ref: useRef('Active') },
    { content: alone, header: 'Alone', source, ref: useRef('Alone') },
    { content: calm, path: 'calm', header: 'Chill', source, ref: useRef('Chill') },
    { content: code, header: 'Code', source, ref: useRef('Code') },
    { content: educational, header: 'Educational', source, ref: useRef('Educational') },
    { content: finance, header: 'Finance', source, ref: useRef('Finance') },
    { content: food, path: 'food', header: 'Eat', source, ref: useRef('Eat') },
    { content: free, header: 'Free', source, ref: useRef('Free') },
    { content: home, header: 'Home', source, ref: useRef('Home') },
    { content: listen, header: 'Listen', source, ref: useRef('Listen') },
    { content: outside, header: 'Outside', source, ref: useRef('Outside') },
    { content: read, path: 'read', header: 'Read & Write', source, ref: useRef('Read & Write') },
    { content: selfImprovement, path: 'selfImprovement', header: 'Self Improvement', source, ref: useRef('Self Improvement') },
    { content: social, header: 'Social', source, ref: useRef('Social') },
    { content: tech, header: 'Tech', source, ref: useRef('Tech') },
    { content: volunteer, header: 'Volunteer', source, ref: useRef('Volunteer') },
    { content: watch, header: 'Watch', source, ref: useRef('Watch') }
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
        <SplashContent content={spotlight} banner="Stuff Worthy of Your Time" destination={source} />
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut item={doTheImpossible} />
        {displayedContent2}
        <ContentCallOut source="do" item={selfImprovementCallOut} />
        {displayedContent3}
        <ContentCallOut source="do" item={outsideCallOut} />
        {displayedContent4}
        <ContentCallOut item={doTheDew} />
        {displayedContent5}
        <ContentCallOut source="do" item={foodCallOut} />
        {displayedContent6}
      </div>
    </Layout>
  )
}

DoSection.propTypes = {
  spotlight: PropTypes.array,
  tech: PropTypes.array,
  code: PropTypes.array,
  food: PropTypes.array,
  finance: PropTypes.array,
  social: PropTypes.array,
  selfImprovement: PropTypes.array
}

export default DoSection
