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
  let ideas = []
  let free = []
  let all = []

  try {
    const handleCall = (path) => callAPI(`watch?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('free=free'),
      handleCall('ideas=ideas'),
      handleCall('all=all')
    ])
    spotlight = promises[0] || []
    free = promises[1] || []
    ideas = promises[2] || []
    all = promises[3] || {}
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      ideas,
      free,
      all
    }
  }
}

function WatchSection ({ spotlight, free, ideas, all = {} }) {
  const obj = all || {}
  const { comedy, horror, drama, action } = obj
  const source = 'watch'
  const contentCategories = [
    { content: slice(comedy), header: 'Comedy', source, ref: useRef('Comedy') },
    { content: slice(horror), header: 'Horror', source, ref: useRef('Horror') },
    { content: slice(ideas), header: 'Ideas', source, ref: useRef('Ideas') },
    { content: slice(free), header: 'Free', source, ref: useRef('Free') },
    { content: slice(drama), header: 'Drama', source, ref: useRef('Drama') },
    { content: slice(action), header: 'Action', source, ref: useRef('Action') }
  ]
  const findCallOut = coll => coll && Array.isArray(coll) && coll.find(item => item.spotlight !== true)
  const dramaCallOut = findCallOut(drama)
  const freeCallOut = findCallOut(free)
  const horrorCallOut = findCallOut(horror)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 2).map(displayContent)
  const displayedContent2 = contentCategories.slice(2, 3).map(displayContent)
  const displayedContent3 = contentCategories.slice(3, 5).map(displayContent)
  const displayedContent4 = contentCategories.slice(5, 7).map(displayContent)
  const displayedContent5 = contentCategories.slice(7, 9).map(displayContent)
  const displayedContent6 = contentCategories.slice(9, contentCategories.length).map(displayContent)
  const davidLetterman = {
    header: '"Everyone has a purpose in life. Perhaps yours is watching television."',
    contents: ['-David Letterman', 'Absolutely inspiring.']
  }
  const fredArmisen = {
    header: '"I really like watching TV at home."',
    contents: ['-Fred Armisen']
  }
  const laurenLapkus = {
    header: '"I live for watching TV and partying with my book club."',
    contents: ['-Lauren Lapkus', 'Truth.']
  }
  return (
    <Layout>
      <Head>
        <title>What to watch - {siteTitle}</title>
      </Head>
      <div className={utilStyles.tvContainer}>
        {
          spotlight && Array.isArray(spotlight) && <SplashContent content={spotlight} banner="Watch the less known" source={source} />
        }
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We&apos;ve watched thousands of hours of less-known TV for you.</div>
          <div className={utilStyles.infoBody}>
            <p>Totally for research.</p>
          </div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut source="watch" item={dramaCallOut} />
        {displayedContent2}
        <ContentCallOut source="watch" item={freeCallOut} />
        {displayedContent3}
        <ContentCallOut item={fredArmisen} />
        {displayedContent4}
        {
          displayedContent5.length
            ? (
              <>
                <ContentCallOut item={laurenLapkus} />
                {displayedContent5}
              </>
            )
            : null
        }
        {
          displayedContent6.length
            ? (
              <>
                <ContentCallOut source={source} item={horrorCallOut} />
                {displayedContent6}
              </>
            )
            : null
        }
      </div>
    </Layout>
  )
}

WatchSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default WatchSection
