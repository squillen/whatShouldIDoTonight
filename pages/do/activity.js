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
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

function Content () {
  const [stuff, setStuff] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const getStuff = async () => {
    try {
      const stuff = await callAPI(`do?id=${id}`)
      setStuff(stuff)
    } catch (e) {
      console.error(e)
    }
  }
  if (!stuff) getStuff()
  return (
    <Layout>
      {
        stuff
          ? <ContentDisplay content={stuff} back={router.back} />
          : <Loading loading={true} />
      }

    </Layout>
  )
}

Content.propTypes = {
  stuff: PropTypes.object
}

export default connect((state) => state)(Content)
