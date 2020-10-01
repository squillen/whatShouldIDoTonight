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
      filters: {},
      categories: [],
      currentActivities: []
    }
  }

  componentDidMount () {
    this.getActivities()
  }

  componentDidUpdate (prevProps) {
    const { currentActivities } = this.state
    const prevPropActivities = prevProps.activities || []
    const activities = this.props.activities || []
    if (prevPropActivities.length === 0 && activities.length > 0 && currentActivities && !currentActivities.length) {
      this.getActivities()
    }
  }

  onClick (c) {
    return () => {
      const { filters } = this.state
      const filtersCopy = Object.assign({}, filters)
      filtersCopy[c] = !filtersCopy[c]
      this.setState({ filters: filtersCopy }, this.getNewActivities)
    }
  }

  getActivities () {
    const { activities } = this.props
    const filters = activities && activities.reduce((obj, el) => {
      el.categories.forEach(category => {
        obj[category] = obj[category] || true
      })
      return obj
    }, {})
    const categories = filters && Object.keys(filters)
    this.setState({ filters, categories, currentActivities: activities })
  }

  getNewActivities () {
    const { filters } = this.state
    const { activities } = this.props
    const newActivities = {}
    for (const key in filters) {
      // only add if selected
      if (filters[key]) {
        activities.forEach(a => {
          // if user selected checkbox, check categories against selection
          if (a.categories.includes(key)) {
            // don't duplicate activity
            if (!newActivities[a.name]) newActivities[a.name] = a
          }
        })
      }
    }
    const currentActivities = Object.values(newActivities)
    this.setState({ currentActivities })
  }

  handleCategory (c) {
    if (c === 'selfImprovement') return 'self improvement'
    if (c === '') return 'free'
    if (c === 'calm') return 'chill'
    if (c === 'food') return 'food & drink'
    if (c === 'read') return 'read & write'
    return c
  }

  render () {
    const { categories, currentActivities, filters } = this.state
    const { header = 'Do all the stuffs!', source, back } = this.props
    return (
      <motion.div variants={stagger}>
        <Head>
          <title>{header} - {siteTitle}</title>
        </Head>
        <BackButton back={back}/>
        <div className={styles.headerContainer}>
          <div className={styles.header}>{header}</div>
          <div className={styles.count}>{(currentActivities && Array.isArray(currentActivities) && currentActivities.length) || 0} items</div>
        </div>
        <div className={styles.contentContainer}>
          <motion.div variants={stagger} className={styles.activitiesContainer}>

            {
              currentActivities

                ? currentActivities.map(activity => (
                  <ContentCard key={activity.name} activity={activity} source={source} />
                ))
                : <Loading loading={true} />
            }
          </motion.div>
          <div className={styles.filters}>
            {
              categories && categories.map(c => {
                return (
                  <div
                    key={c}
                    className={styles.filter}
                  >
                    <div onClick={this.onClick(c)} className={styles[filters[c] ? 'selectedCheckbox' : 'emptyCheckbox']}>
                      {filters[c] && <span>&#10003;</span>}
                    </div>
                    <div className={styles.label}>{this.handleCategory(c)}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </motion.div>
    )
  }
}

DisplayAllEvents.propTypes = {
  activities: PropTypes.array,
  source: PropTypes.string,
  header: PropTypes.string,
  back: PropTypes.func
}
