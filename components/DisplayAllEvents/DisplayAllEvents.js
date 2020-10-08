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
    this.setState({ currentActivities: this.props.activities })
  }

  componentDidUpdate (prevProps) {
    const prevPropActivities = prevProps.activities || []
    const activities = this.props.activities || []
    if (prevPropActivities.length !== activities.length) {
      this.setState({ currentActivities: activities })
    }
  }

  render () {
    const { currentActivities } = this.state
    const { header = 'Do all the stuffs!', source, back } = this.props
    const noActivitiesDiv = this.showNoActivities()
    return (
      <motion.div className={styles.displayAllContainer} variants={stagger}>
        <Head>
          <title>{header} - {siteTitle}</title>
        </Head>
        <BackButton back={back}/>
        <div className={styles.headerContainer}>
          <div className={styles.header}>{header}</div>
          <div className={styles.count}>{(currentActivities && Array.isArray(currentActivities) && currentActivities.length) || 0} items</div>
        </div>
        <motion.div variants={stagger} className={styles.activitiesContainer}>
          {
            currentActivities && currentActivities.length
              ? currentActivities.map(activity => (
                <ContentCard key={activity.name} activity={activity} source={source} />
              ))
              : currentActivities && currentActivities.length === 0
                ? noActivitiesDiv
                : <Loading loading={true} />
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
  source: PropTypes.string,
  header: PropTypes.string,
  back: PropTypes.func,
}
