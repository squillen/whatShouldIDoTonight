import React, { useState } from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import wrapper from '../../src/store/store'
import { getNewUserActivity, setUserActivities } from '../../src/store/activities/action'

// COMPONENTS
import Layout from '../../components/layout/layout'

// HELPERS
import utilStyles from '../../styles/utils.module.css'

export const getStaticProps = wrapper.getStaticProps(({ store }) => {
  return {
    props: {}
  }
})

function TVSection () {
  return (
    <Layout>
      <div className={utilStyles.tvContainer}>
        <div className="header">
          tv to watch
        </div>
      </div>
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewUserActivity: bindActionCreators(getNewUserActivity, dispatch),
    setUserActivities: bindActionCreators(setUserActivities, dispatch)
  }
}

TVSection.propTypes = {
  setUserActivities: PropTypes.func,
  getNewUserActivity: PropTypes.func,
  activities: PropTypes.object
}

export default connect((state) => state, mapDispatchToProps)(TVSection)
