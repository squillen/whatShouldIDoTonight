import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'
import ArticleDisplay from '../../components/ArticleDisplay/ArticleDisplay'
import ArticleHead from '../../components/ArticleHead'

// HELPERS
import { getActivityFromDB, updateActivityIMDbInDB } from '../../lib/helpers/db/requests'
import { getIMDbResults } from '../../lib/helpers/external/requests'
import handleSeasons from '../../lib/helpers/handleSeasons'
import utilStyles from '../../styles/utils.module.css'
import HelpfulCounter from '../../components/HelpfulCounter/HelpfulCounter'

function Content () {
  const [activity, setActivity] = useState(null)
  const router = useRouter()
  const { name } = router.query

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

  const getActivity = async () => {
    try {
      const retrievedActivity = await getActivityFromDB('watch', name)
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
    if (!activity && name) getActivity()
  }, [name])

  return (
    <Layout>
      {
        activity
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
                        <HelpfulCounter activity={activity} source="watch" />
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
}

export default connect((state) => state)(Content)
