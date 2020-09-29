import React from 'react'
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
    { content: comedy, header: 'Comedy', source },
    { content: horror, header: 'Horror', source },
    { content: ideas, header: 'Ideas', source },
    { content: free, header: 'Free', source },
    { content: drama, header: 'Drama', source },
    { content: action, header: 'Action', source }
  ]
  const displayedContent = contentCategories.map(displayContent)
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
            <p>
              Totally for research.
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
  comedy: PropTypes.array,
  drama: PropTypes.array,
  action: PropTypes.array,
  horror: PropTypes.array,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default TVSection
