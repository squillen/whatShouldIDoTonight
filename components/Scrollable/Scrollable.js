import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContentCard from '../ContentCard/ContentCard'
import styles from './Scrollable.module.css'

function Scrollable ({ content = [], source }) {
  return (
    <div className={styles.scrollableContainer}>
      {
        content && content.map(el => (
          <ContentCard key={el.name} activity={el} source={source} />
        ))
      }
    </div>
  )
}

Scrollable.propTypes = {
  content: PropTypes.array,
  source: PropTypes.string
}

export default connect((state) => state)(Scrollable)
