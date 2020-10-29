import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'
import ArticleDisplay from '../../components/ArticleDisplay/ArticleDisplay'

// HELPERS
import { getActivityFromDB } from '../../lib/helpers/db/requests'
import utilStyles from '../../styles/utils.module.css'

function Content () {
  const [article, setArticle] = useState(null)
  const router = useRouter()
  const { id } = router.query

  const getArticle = async () => {
    try {
      const retrievedArticle = await getActivityFromDB('watch', id)
      setArticle(retrievedArticle)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (!article && id) getArticle()
  }, [id])

  return (
    <Layout>
      {
        article
          ? (
            <div className={utilStyles.watchContentSection}>
              <ArticleDisplay article={article} source={'drink'} />
            </div>
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
