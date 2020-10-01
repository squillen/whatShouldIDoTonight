import React, { useRef } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
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
  let spotlight = []
  let comedy = []
  let technology = []
  let educational = []
  let finance = []
  let code = []
  let crime = []
  let food = []
  let selfImprovement = []

  try {
    spotlight = await callAPI('listen?spotlight=spotlight')
    comedy = await callAPI('listen?category=comedy')
    technology = await callAPI('listen?category=tech')
    educational = await callAPI('listen?category=educational')
    finance = await callAPI('listen?category=finance')
    code = await callAPI('listen?category=code')
    crime = await callAPI('listen?category=crime')
    food = await callAPI('listen?category=food')
    selfImprovement = await callAPI('listen?category=selfImprovement')
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
      food,
      selfImprovement
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
  food,
  selfImprovement
}) {
  const source = 'listen'
  const contentCategories = [
    { content: comedy, header: 'Comedy', source, ref: useRef('Comedy') },
    { content: technology, header: 'Tech', source, ref: useRef('Tech') },
    { content: educational, header: 'Educational', source, ref: useRef('Educational') },
    { content: finance, header: 'Finance', source, ref: useRef('Finance') },
    { content: code, header: 'Code', source, ref: useRef('Code') },
    { content: crime, header: 'Crime', source, ref: useRef('Crime') },
    { content: food, path: 'food', header: 'Food & Drink', source, ref: useRef('Food & Drink') }
  ]

  const findCallOut = coll => coll.find(item => item.spotlight !== true)
  const codeCallOut = findCallOut(code)
  const crimeCallOut = findCallOut(crime)
  const selfImprovementCallOut = findCallOut(selfImprovement)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 2).map(displayContent)
  const displayedContent2 = contentCategories.slice(2, 3).map(displayContent)
  const displayedContent3 = contentCategories.slice(3, 5).map(displayContent)
  const displayedContent4 = contentCategories.slice(5, 8).map(displayContent)
  const displayedContent5 = contentCategories.slice(8, 10).map(displayContent)
  const displayedContent6 = contentCategories.slice(10, 30).map(displayContent)
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
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut source="listen" item={selfImprovementCallOut} />
        {displayedContent2}
        <ContentCallOut source="listen" item={crimeCallOut} />
        {displayedContent3}
        <ContentCallOut source="listen" item={codeCallOut} />
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
                <ContentCallOut body={doTheDew} />
                {displayedContent6}
              </>
            )
            : null
        }
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
  food: PropTypes.array,
  selfImprovement: PropTypes.array
}

export default Listen
