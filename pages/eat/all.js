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
  return (
    <GetAllEvents
      header={category ? `${category} foods` : null}
      source="eat"
      category={category}
      back={router.back}
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object
}

export default connect((state) => state)(Content)
