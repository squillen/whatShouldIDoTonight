import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../layout/layout'
import DisplayAllEvents from '../DisplayAllEvents/DisplayAllEvents'

// HELPERS
import callAPI from '../../lib/helpers/callAPI'
import styles from './GetAllEvents.module.css'

function GetAllEvents ({ header = 'Things To Do', source, category, back }) {
  const [allActivities, setAllActivities] = useState([])
  const [currentActivities, setCurrentActivities] = useState([])
  const [calledAPI, setCalledAPI] = useState(false)
  const [filters, setFilters] = useState({})
  const [categories, setCategories] = useState([])
  const stub = `${source}?category=${category}`
  if (category && !calledAPI && allActivities && !allActivities.length) getAllActivitiesOnLoad()
  if (!categories.length && allActivities && allActivities.length) getFiltersAndCategories()
  async function getAllActivitiesOnLoad () {
    try {
      const allActivities = await callAPI(stub)
      setAllActivities(allActivities)
      setCurrentActivities(allActivities)
    } catch (e) {
      console.error(e)
    } finally {
      setCalledAPI(true)
    }
  }

  function getFiltersAndCategories () {
    const newFilters = allActivities && allActivities.reduce((obj, el) => {
      el.categories.forEach(category => {
        if (category === '') obj.free = true
        else obj[category] = true
      })
      return obj
    }, {})
    const categories = newFilters && Object.keys(newFilters).sort()
    categories.unshift('all')
    newFilters.all = true
    setFilters(newFilters)
    setCategories(categories)
    setCurrentActivities(allActivities)
  }

  function onClick (c) {
    const filtersCopy = Object.assign({}, filters)
    const all = filtersCopy.all
    if (c.toLowerCase() === 'all') {
      const bool = !all
      for (const key in filtersCopy) {
        filtersCopy[key] = bool
      }
      filtersCopy.all = !all
    } else {
      filtersCopy[c] = !filtersCopy[c]
      filtersCopy.all = false
    }
    setFilters(filtersCopy)
    getNewActivities(filtersCopy)
  }

  function getNewActivities (filtersCopy) {
    const newActivities = {}
    const doNotWants = []
    for (const key in filtersCopy) {
      if (!filtersCopy[key]) doNotWants.push(key)
    }
    for (const key in filtersCopy) {
      if (filtersCopy[key]) {
        allActivities.forEach(a => {
          const safeCategories = a.categories || []
          const categoriesWithDoNotWants = [...safeCategories, ...doNotWants]
          const uniqueCategories = Array.from(new Set(categoriesWithDoNotWants))
          if (categoriesWithDoNotWants.length === uniqueCategories.length) {
            newActivities[a.name] = a
          }
        })
      }
    }
    const newCurrentActivities = Object.values(newActivities)
    setCurrentActivities(newCurrentActivities)
  }

  const handleCategory = (c) => {
    if (c === 'selfImprovement') return 'self improvement'
    if (c === '') return 'free'
    if (c === 'calm') return 'chill'
    if (c === 'food') return 'food & drink'
    if (c === 'read') return 'read & write'
    return c
  }
  return (
    <Layout>
      <div className={styles.contentContainer}>
        <DisplayAllEvents
          activities={currentActivities}
          header={header}
          source={source}
          back={back}
        />
        <div className={styles.filters}>
          {
            categories && categories.map(c => {
              return (
                <div
                  key={c}
                  className={styles.filter}
                >
                  <div onClick={() => onClick(c)} className={styles[filters[c] ? 'selectedCheckbox' : 'emptyCheckbox']}>
                    {filters[c] && <span>&#10003;</span>}
                  </div>
                  <div className={styles.label}>{handleCategory(c)}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

GetAllEvents.propTypes = {
  back: PropTypes.func,
  category: PropTypes.string,
  header: PropTypes.string,
  source: PropTypes.string
}

export default connect((state) => state)(GetAllEvents)
