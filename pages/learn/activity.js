import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

// HELPERS
import callAPI from '../../lib/helpers/callAPI'

function Content () {
  const [course, setCourse] = useState(null)
  const getCourse = async () => {
    try {
      const router = useRouter()
      const { id = '' } = router.query
      let course = {}
      if (id) course = await callAPI(`learn?id=${id}`)
      setCourse(course)
    } catch (e) {
      console.error(e)
    }
  }
  if (!course) getCourse()
  return (
    <Layout>
      {
        course
          ? <ContentDisplay source={course} back="/categories/learn" />
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  course: PropTypes.object
}

export default connect((state) => state)(Content)
