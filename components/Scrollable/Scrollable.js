import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContentCard from '../ContentCard/ContentCard'
import styles from './Scrollable.module.css'

function Scrollable ({ content = [], source }) {
  const activities = content && content.slice(0, 3)
  return (
    activities &&
    <div className={styles.scrollableContainer}>
      <ContentCard activities={activities} source={source} />
    </div>
  )
}

Scrollable.propTypes = {
  content: PropTypes.array,
  source: PropTypes.string,
}

export default connect((state) => state)(Scrollable)
