import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

function Content () {
  const router = useRouter()
  const { category } = router.query
  const cleanedCategory = () => {
    if (category) {
      return category === 'selfImprovement'
        ? 'Self Improvement'
        : category[0].toUpperCase() + category.slice(1, category.length).toLowerCase()
    } else return ''
  }
  return (
    <GetAllEvents
      header={`Do ${cleanedCategory()} Stuffs`}
      source="do"
      category={category}
      back={router.back}
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object
}

export default connect((state) => state)(Content)