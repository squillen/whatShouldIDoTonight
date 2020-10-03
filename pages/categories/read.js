import React, { useRef } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import { siteTitle } from '../../components/defaultHead'
import ContentCallOut from '../../components/ContentCallOut/ContentCallOut'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import displayContent from '../../lib/helpers/displayContent'
import displayCategoryOptions from '../../lib/helpers/displayCategoryOptions'
import { stagger } from '../../animations/default'
import { slice } from '../../lib/helpers/dataHelpers'

export async function getStaticProps () {
  let spotlight = []
  let free = []
  let all = []

  try {
    const handleCall = (path) => callAPI(`read?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('free=free'),
      handleCall('all=all')
    ])
    spotlight = promises[0]
    free = promises[1]
    all = promises[2]
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      free,
      all
    }
  }
}

function ReadSection ({ spotlight, free, all }) {
  const obj = all || {}
  const { autoBio, crime, history, personal, finance, food, selfImprovement } = obj
  const source = 'read'
  const contentCategories = [
    { content: slice(autoBio), header: 'Autobiography', source, ref: useRef('Autobiography') },
    { content: slice(free), header: 'Free', source, ref: useRef('Free') },
    { content: slice(crime), header: 'Crime', source, ref: useRef('Crime') },
    { content: slice(history), header: 'History', source, ref: useRef('History') },
    { content: slice(personal), header: 'Personal', source, ref: useRef('Personal') },
    { content: slice(finance), header: 'Finance', source, ref: useRef('Finance') },
    { content: slice(food), header: 'Food', source, ref: useRef('Food') },
    { content: slice(selfImprovement), path: 'selfImprovement', header: 'Self Improvement', source, ref: useRef('Self Improvement') }
  ]
  const findCallOut = coll => coll && Array.isArray(coll) && coll.find(item => item.spotlight !== true)
  const crimeCallOut = findCallOut(crime)
  const selfImprovementCallOut = findCallOut(selfImprovement)
  const foodCallOut = findCallOut(food)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 2).map(displayContent)
  const displayedContent2 = contentCategories.slice(2, 4).map(displayContent)
  const displayedContent3 = contentCategories.slice(4, 6).map(displayContent)
  const displayedContent4 = contentCategories.slice(6, 9).map(displayContent)
  const displayedContent5 = contentCategories.slice(9, 14).map(displayContent)
  const displayedContent6 = contentCategories.slice(14, 30).map(displayContent)
  const dorothyParker = {
    header: '"The cure for boredom is curiosity. There is no cure for curiosity."',
    contents: ['-Dorothy Parker']
  }
  const stevenWright = {
    header: '"To steal ideas from one person is plagiarism; to steal from many is research."',
    contents: ['-Steven Wright']
  }
  const tupacShakur = {
    header: '"Even the genius asks questions."',
    contents: ['-Tupac Shakur']
  }
  return (
    <Layout>
      <Head>
        <title>What to read - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        {spotlight && <SplashContent content={spotlight} banner="Books worth reading" source={source} /> }
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We&apos;ve read tons of books for you.</div>
          <div className={utilStyles.infoBody}>
            <p>
              You owe us so big.
            </p>
          </div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut source={source} item={selfImprovementCallOut} />
        {displayedContent2}
        <ContentCallOut item={dorothyParker} />
        {displayedContent3}
        <ContentCallOut source={source} item={crimeCallOut} />
        {displayedContent4}
        {
          displayedContent5.length
            ? (
              <>
                <ContentCallOut item={stevenWright} />
                {displayedContent5}
              </>
            )
            : null
        }
        {
          displayedContent6.length
            ? (
              <>
                <ContentCallOut source={source} item={foodCallOut} />
                {displayedContent6}
              </>
            )
            : null
        }
      </div>
    </Layout>
  )
}

ReadSection.propTypes = {
  spotlight: PropTypes.array,
  free: PropTypes.array,
  all: PropTypes.object
}

export default ReadSection
