import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { siteTitle } from '../../components/defaultHead'
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
    }
  }

  componentDidMount () {
    const { activities = [] } = this.props
    if (activities) {
      const currentActivities = [...activities]
      const randomIndex = Math.floor(Math.random() * currentActivities.length)
      const highlightActivity = currentActivities.splice(randomIndex, 1)[0]
      this.setState({ currentActivities, highlightActivity })
    }
  }

  componentDidUpdate (prevProps) {
    const prevPropActivities = prevProps.activities || []
    const activities = this.props.activities || []
    if (prevPropActivities.length !== activities.length) {
      const currentActivities = [...activities]
      const randomIndex = Math.floor(Math.random() * currentActivities.length)
      const highlightActivity = currentActivities.splice(randomIndex, 1)[0]
      this.setState({ currentActivities, highlightActivity })
    }
  }

  render () {
    const { currentActivities = [], highlightActivity } = this.state
    const { categoryInfo: { header, tag, title }, source } = this.props
    // const noActivitiesDiv = this.showNoActivities()
    return (
      <motion.div className={styles.displayAllContainer} variants={stagger}>
        <Head>
          <title>{title} - {siteTitle}</title>
        </Head>
        <BackButton />
        <div className={styles.headerContainer}>
          <h2 className={styles.header}>{header}</h2>
          <p className={styles.tag}>{tag}</p>
        </div>
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
      </motion.div>
    )
  }

  showNoActivities () {
    return (
      <div className={styles.noActivities}>
        <div className={styles.label}>Try adjusting your filters.</div>
        <div className={styles.noActivitiesGif}>
          <img
            src="https://media.giphy.com/media/10h8CdMQUWoZ8Y/giphy.gif"
            alt="Willy Wonka saying 'You get nothing! You lose! Good day, sir!'"
          />
        </div>
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
