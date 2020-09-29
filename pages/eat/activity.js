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
  const [dish, setDish] = useState(null)
  const getDish = async () => {
    try {
      const router = useRouter()
      const { id } = router.query
      const dish = await callAPI(`eat?id=${id}`)
      setDish(dish)
    } catch (e) {
      console.error(e)
    }
  }
  if (!dish) getDish()
  return (
    <Layout>
      {
        dish
          ? <ContentDisplay source={dish} back="/categories/eat" />
          : <Loading />
      }

    </Layout>
  )
}

Content.propTypes = {
  dish: PropTypes.object
}

export default connect((state) => state)(Content)
