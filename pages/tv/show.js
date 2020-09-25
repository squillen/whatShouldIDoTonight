import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'

function Content () {
  const [show, setShow] = useState(null)
  const getShow = async () => {
    try {
      const router = useRouter()
      const { id } = router.query
      const show = await callAPI(`tv?id=${id}`)
      setShow(show)
    } catch (e) {
      console.error(e)
    }
  }
  if (!show) getShow()
  return (
    <Layout>
      {
        show
          ? (
            <div className={utilStyles.showContainer}>
              <div
                className={utilStyles.imageBanner}
                style={{ background: `url(${show.image}) center no-repeat` }}
              >
                <div className={utilStyles.overlay} />
                <div className={utilStyles.showNameInShow}>{show.name}</div>
              </div>
            </div>
          )
          : <Loading />
      }

    </Layout>
  )
}

Content.propTypes = {
  show: PropTypes.object
}

export default connect((state) => state)(Content)
