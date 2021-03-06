import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../../../components/layout/layout'
import Loading from '../../../../components/loading/loading'
import ContentDisplay from '../../../../components/ContentDisplay/ContentDisplay'
import ArticleDisplay from '../../../../components/ArticleDisplay/ArticleDisplay'
import ArticleHead from '../../../../components/ArticleHead'

// HELPERS
import { getActivityFromDB, updateActivityIMDbInDB } from '../../../../lib/helpers/db/requests'
import { getIMDbResults } from '../../../../lib/helpers/external/requests'
import handleSeasons from '../../../../lib/helpers/handleSeasons'
import utilStyles from '../../../../styles/utils.module.css'
import HelpfulCounter from '../../../../components/HelpfulCounter/HelpfulCounter'

export async function getStaticPaths () {
  return {
    paths: [
      { params: { lookup: '*' } },
    ],
    fallback: true,
  }
}

export async function getStaticProps (context) {
  const lookup = context.params.lookup
  const originalActivity = await getActivityFromDB('watch', lookup)
  return {
    props: {
      originalActivity,
    },
  }
}

function Content ({ originalActivity }) {
  const [activity, setActivity] = useState(null)
  const getFreshIMDbResults = async (retrievedActivity = {}) => {
    if (retrievedActivity && retrievedActivity.imdbID) {
      try {
        const imdb = await getIMDbResults(retrievedActivity.imdbID)
        const daysBeforeExpiration = process.env.DAYS_BEFORE_IMDB_EXPIRATION || 7
        const newExpirationDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * daysBeforeExpiration)
        imdb.expirationDate = newExpirationDate
        updateActivityIMDbInDB(retrievedActivity._id, { imdb })
        retrievedActivity.imdb = imdb
        setActivity(retrievedActivity)
      } catch (e) {
        console.error(e)
      }
    }
  }

  const getActivityDeets = async () => {
    const retrievedActivity = originalActivity
    try {
      if (retrievedActivity && retrievedActivity.imdb) {
        const expirationDate = retrievedActivity.imdb.expirationDate || ''
        const resultsAreFresh = new Date(expirationDate).getTime() > new Date().getTime()
        if (resultsAreFresh) {
          setActivity(retrievedActivity)
        } else {
          getFreshIMDbResults(retrievedActivity)
        }
      } else if (retrievedActivity && retrievedActivity.imdbID) {
        getFreshIMDbResults(retrievedActivity)
      } else if (retrievedActivity._id) {
        setActivity(retrievedActivity)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (originalActivity && !activity) getActivityDeets()
  }, [originalActivity])

  return (
    <Layout>
      {
        activity && activity.name
          ? (
            <>
              <ArticleHead activity={activity}/>
              <div className={utilStyles.watchContentSection}>
                {
                  activity.article
                    ? <ArticleDisplay article={activity} source="watch" />
                    : (
                      <>
                        <ContentDisplay content={activity} />
                        <div className={utilStyles.showInfoSectionContainer}>
                          <div className={utilStyles.showInfoSectionHeader}>Show Info:</div>
                          <div className={utilStyles.showInfoSectionBody}>
                            {
                              activity.seasonsToWatch
                                ? (
                                  <div className={utilStyles.seasonsToWatch}>
                                    {handleSeasons(activity)}
                                  </div>
                                )
                                : null
                            }
                            {
                              activity.whereToWatch && activity.whereToWatch.length
                                ? (
                                  <div className={utilStyles.whereToWatch}>
                                    <div className={utilStyles.tableHeader}>Where to watch:</div>
                                    {activity.whereToWatch.map((obj) => (
                                      <Link key={`${activity.name}-${obj.name}`} href={obj.url} as={obj.url}>
                                        <a target="_blank">{obj.name}</a>
                                      </Link>
                                    ))}
                                  </div>
                                )
                                : null
                            }
                          </div>
                        </div>
                        {/* <HelpfulCounter activity={activity} source="watch" /> */}
                      </>
                    )
                }
              </div>
            </>
          )
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  show: PropTypes.object,
  originalActivity: PropTypes.object,
}

export default Content
