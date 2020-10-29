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
      const retrievedActivity = await getActivityFromDB('drink', id)
      setActivity(retrievedActivity)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (!activity && id) getActivity()
  }, [id])

  return (
    <Layout>
      {
        activity
          ? (
            <>
              <ArticleHead activity={activity}/>
              <div className={utilStyles.watchContentSection}>
                <ContentDisplay content={activity} />
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
