import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

function Content () {
  const router = useRouter()
  let { category } = router.query
  const cleanedCategory = () => {
    if (category) {
      return category.toLowerCase() === 'selfimprovement'
        ? 'Self Improvement'
        : category === 'total'
          ? 'All'
          : category[0].toUpperCase() + category.slice(1, category.length).toLowerCase()
    } else return ''
  }
  if (category === 'selfimprovement') category = 'selfImprovement'
  return (
    <GetAllEvents
      header={`Do ${cleanedCategory()} Stuffs`}
      source="do"
      category={category}
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
