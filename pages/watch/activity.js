import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'
import ArticleHead from '../../components/ArticleHead'

// HELPERS
import { getActivityFromDB } from '../../lib/helpers/db/requests'
import handleSeasons from '../../lib/helpers/handleSeasons'
import utilStyles from '../../styles/utils.module.css'

function Content () {
  const [activity, setActivity] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const getActivity = async () => {
    try {
      const newActivity = await getActivityFromDB('watch', id)
      setActivity(newActivity)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activity && id) getActivity()

  return (
    <Layout>
      {
        activity
          ? (
            <>
              <ArticleHead activity={activity}/>
              <div className={utilStyles.watchContentSection}>
                <ContentDisplay content={activity} back={router.back} />
                <div className={utilStyles.showInfoSectionContainer}>
                  <div className={utilStyles.showInfoSectionHeader}>Show Info:</div>
                  <div className={utilStyles.showInfoSectionBody}>
                    {
                      activity.seasonsToWatch
                        ? (
                          <div className={utilStyles.seasonsToWatch}>
                            {handleSeasons(activity.seasonsToWatch)}
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
                              <Link key={`${activity.name}-${obj.name}`} href={obj.url}>
                                <a target="_blank">{obj.name}</a>
                              </Link>
                            ))}
                          </div>
                        )
                        : null
                    }
                  </div>
                </div>
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
