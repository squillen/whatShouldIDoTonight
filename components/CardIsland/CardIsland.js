import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContentCard from '../ContentCard/ContentCard'
import styles from './CardIsland.module.css'

function CardIsland ({ content = [], source }) {
  let display = content
  if (display.length > 6) display = display.slice(0, 6)
  return (
    display &&
    <ul className={styles.cardIslandContainer}>
      <ContentCard activities={display} source={source} />
    </ul>
  )
}

CardIsland.propTypes = {
  content: PropTypes.array,
  source: PropTypes.string,
}

export default connect((state) => state)(CardIsland)
