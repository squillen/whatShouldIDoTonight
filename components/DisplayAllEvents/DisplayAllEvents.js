import React from 'react'
import PropTypes from 'prop-types'
import { stagger } from '../../animations/default'

import styles from './DisplayAllEvents.module.css'
import { motion } from 'framer-motion'
import ContentCard from '../ContentCard/ContentCard'
import BackButton from '../BackButton/BackButton'
import Loading from '../loading/loading'

export default class DisplayAllEvents extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentActivities: [],
      allActivities: [],
    }
  }

  componentDidMount () {
    const { activities = [], allActivities = [] } = this.props
    if (allActivities.length && !this.state.allActivities.length) {
      this.setState({ allActivities })
    }
    if (activities) {
      const currentActivities = [...activities]
      const randomIndex = Math.floor(Math.random() * currentActivities.length)
      const highlightActivity = currentActivities.splice(randomIndex, 1)[0]
      this.setState({ currentActivities, highlightActivity })
    }
  }

  componentDidUpdate (prevProps) {
    const prevAllActivities = prevProps.allActivities || []
    const allActivities = this.props.allActivities || []
    const prevPropActivities = prevProps.activities || []
    const activities = this.props.activities || []
    if (allActivities.length && !prevAllActivities.length) {
      this.setState({ allActivities })
    }
    if (prevPropActivities.length !== activities.length) {
      const currentActivities = [...activities]
      const randomIndex = Math.floor(Math.random() * currentActivities.length)
      const highlightActivity = currentActivities.splice(randomIndex, 1)[0]
      this.setState({ currentActivities, highlightActivity })
    }
  }

  render () {
    const { allActivities, currentActivities, highlightActivity } = this.state
    const { categoryInfo: { header, tag, title }, source } = this.props
    const noActivitiesDiv = this.showNoActivities()
    return (
      <motion.div className={styles.displayAllContainer} variants={stagger}>
        {/* <BackButton /> */}
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>{header}</h1>
          <p className={styles.tag}>{tag}</p>
        </div>
        {
          highlightActivity
            ? (
              <>
                <motion.div variants={stagger} className={styles.activitiesContainer}>
                  {highlightActivity && (
                    <div className={styles.highlightActivity}>
                      <ContentCard activities={[highlightActivity]} source={source} span />
                    </div>
                  )}
                  {
                    currentActivities && currentActivities.length
                      ? <ContentCard activities={currentActivities} source={source} />
                      : null
                  }
                </motion.div>
              </>
            )
            : allActivities.length && !currentActivities.length ? noActivitiesDiv : <Loading loading={true} />
        }
      </motion.div>
    )
  }

  showNoActivities () {
    return (
      <div className={styles.noActivities}>
        <div className={styles.label}>No results! Toggle some tags.</div>
        {/* <div className={styles.noActivitiesGif}>
          <img
            src="https://media.giphy.com/media/10h8CdMQUWoZ8Y/giphy.gif"
            alt="Willy Wonka saying 'You get nothing! You lose! Good day, sir!'"
          />
        </div> */}
      </div>
    )
  }
}

DisplayAllEvents.propTypes = {
  activities: PropTypes.array,
  source: PropTypes.string.isRequired,
  categoryInfo: PropTypes.object.isRequired,
  back: PropTypes.func,
}
