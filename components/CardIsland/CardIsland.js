import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ContentCard from '../ContentCard/ContentCard'
import styles from './CardIsland.module.css'

function CardIsland ({ content = [], source }) {
  const display = content.length >= 6
    ? content.slice(0, 6)
    : content.length >= 3
      ? content.slice(0, 3)
      : null
  return (
    display &&
    <ul className={styles.cardIslandContainer}>
      {
        display.map((el, idx) => (
          <li className={styles.cardListItem} key={`${el.name}-${idx}`}>
            <ContentCard activity={el} source={source} />
          </li>
        ))
      }
    </ul>
  )
}

CardIsland.propTypes = {
  content: PropTypes.array,
  source: PropTypes.string,
}

export default connect((state) => state)(CardIsland)
