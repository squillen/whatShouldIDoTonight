import React, { useState, useRef } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import wrapper from '../../src/store/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setDrinkActivities } from '../../src/store/categories/action'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import ArticleContent from '../../components/ArticleContent/ArticleContent'
import HandleContent from '../../components/HandleContent'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivitiesFromDB } from '../../lib/helpers/db/requests'

const pageDescription =
"What should I watch tonight? We've watched tons of less-known shows, movies, and binge-worthy series involving comedy, " +
'thrillers, horror, drama, documentary, crime, history, food, action, adventure, romance, rom com, mystery, or more.'

const quotes = [
  {
    header: '"Everyone has a purpose in life. Perhaps yours is watching television."',
    contents: ['-David Letterman', 'Absolutely inspiring. Dick.'],
  },
  {
    header: '"I really like watching TV at home."',
    contents: ['-Fred Armisen', 'We knew that man was a genius.'],
  },
  {
    header: '"I live for watching TV and partying with my book club."',
    contents: ['-Lauren Lapkus', 'Truth.'],
  },
]

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  const state = store.getState()
  const all = state.categories.watchActivities.all || {}
  const spotlight = state.categories.watchActivities.spotlight || []
  const articles = state.categories.watchActivities.articles || []
  if (spotlight && !spotlight.length) return getActivitiesFromDB('drink')
  else {
    return {
      props: {
        spotlight,
        all,
        articles,
      },
    }
  }
})

function DrinkSection ({ spotlight = [], all = {}, articles = [], setInRedux, setDrinkActivitiesFromProps }) {
  const [updatedRedux, setUpdatedRedux] = useState(false)
  if (!updatedRedux && setInRedux) {
    setUpdatedRedux(true)
    setDrinkActivitiesFromProps({ all, spotlight })
  }
  const source = 'drink'
  const obj = all || {}

  const homeRef = useRef('home')
  const display = (
    <HandleContent
      all={obj}
      articles={articles}
      source={source}
      quotes={quotes}
      homeRef={homeRef}
    />
  )

  return (
    <Layout>
      <Head>
        <title>Things To Drink Tonight - {siteTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      {
        spotlight && Array.isArray(spotlight) && spotlight.length
          ? <SplashContent content={spotlight} banner="Drink better" source={source} />
          : null
      }
      {
        articles && Array.isArray(articles) && articles.length
          ? <ArticleContent articles={articles} banner="THE LATEST" source={source} />
          : null
      }
      <div className={utilStyles.infoContainer} ref={homeRef}>
        <div className={utilStyles.infoHeader}>We drank so nany driniks fo r you.</div>
        <div className={utilStyles.infoBody}>
          <p>aLl for resRCH.</p>
        </div>
      </div>
      {display}
    </Layout>
  )
}

DrinkSection.propTypes = {
  spotlight: PropTypes.array,
  articles: PropTypes.array,
  all: PropTypes.object,
  setDrinkActivitiesFromProps: PropTypes.func,
  setInRedux: PropTypes.bool,
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDrinkActivitiesFromProps: bindActionCreators(setDrinkActivities, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(DrinkSection)
