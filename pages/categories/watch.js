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

export async function getStaticProps () {
  let spotlight = []
  let ideas = []
  let free = []
  let comedy = []
  let drama = []
  let horror = []
  let action = []
  try {
    spotlight = await callAPI('watch?spotlight=spotlight')
    free = await callAPI('watch?free=free')
    ideas = await callAPI('watch?ideas=ideas')
    comedy = await callAPI('watch?category=comedy')
    drama = await callAPI('watch?category=drama')
    horror = await callAPI('watch?category=horror')
    action = await callAPI('watch?category=action')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      ideas,
      free,
      comedy,
      drama,
      horror,
      action
    }
  }
}

function TVSection ({ spotlight, comedy, horror, free, drama, action, ideas }) {
  const source = 'watch'
  const contentCategories = [
    { content: comedy, header: 'Comedy', source, ref: useRef('Comedy') },
    { content: horror, header: 'Horror', source, ref: useRef('Horror') },
    { content: ideas, header: 'Ideas', source, ref: useRef('Ideas') },
    { content: free, header: 'Free', source, ref: useRef('Free') },
    { content: drama, header: 'Drama', source, ref: useRef('Drama') },
    { content: action, header: 'Action', source, ref: useRef('Action') }
  ]
  const findCallOut = coll => coll.find(item => item.spotlight !== true)
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
  const doTheDew = {
    header: '"Do the Dew"',
    contents: ['-Mountain Dew', 'Straight wisdom.']
  }
  const justDoIt = {
    header: '"Doing something is better than doing nothing."',
    contents: ['-whatshouldidotonight.com', 'Come for the fun, stay for the knowledge.']
  }
  return (
    <Layout>
      <Head>
        <title>What to watch - {siteTitle}</title>
      </Head>
      <div className={utilStyles.tvContainer}>
        <SplashContent content={spotlight} banner="Watch the less known" source={source} />
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
        <ContentCallOut body={doTheDew} />
        {displayedContent4}
        {
          displayedContent5.length
            ? (
              <>
                <ContentCallOut body={justDoIt} />
                {displayedContent5}
              </>
            )
            : null
        }
        {
          displayedContent6.length
            ? (
              <>
                <ContentCallOut source="watch" item={horrorCallOut} />
                {displayedContent6}
              </>
            )
            : null
        }
      </div>
    </Layout>
  )
}

TVSection.propTypes = {
  spotlight: PropTypes.array,
  comedy: PropTypes.array,
  drama: PropTypes.array,
  action: PropTypes.array,
  horror: PropTypes.array,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default TVSection
