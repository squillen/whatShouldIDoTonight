import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../layout/layout'
import DisplayAllEvents from '../DisplayAllEvents/DisplayAllEvents'

// HELPERS
import { callAPI, getOptions } from '../../lib/helpers/callAPI'
import styles from './GetAllEvents.module.css'

function GetAllEvents ({ header = 'Things To Do', source, category = '' }) {
  const [allActivities, setAllActivities] = useState([])
  const [currentActivities, setCurrentActivities] = useState(null)
  const [calledAPI, setCalledAPI] = useState(false)
  const [filters, setFilters] = useState({})
  const [categories, setCategories] = useState([])
  useEffect(() => {
    if (category && !calledAPI && allActivities && !allActivities.length) getAllActivitiesOnLoad()
  }, [category])
  useEffect(() => {
    if (!categories.length && allActivities && allActivities.length) getFiltersAndCategoriesOnLoad()
  }, [categories, allActivities])

  async function getAllActivitiesOnLoad () {
    try {
      const options = getOptions()
      const destination = (category && category.toLowerCase() === 'total') ? '' : `category=${category}`
      const stub = `${source}?${destination}`
      const allActivities = await callAPI(stub, options)
      setAllActivities(allActivities)
      setCurrentActivities(allActivities)
    } catch (e) {
      console.error(e)
    } finally {
      setCalledAPI(true)
    }
  }

  function getFiltersAndCategoriesOnLoad () {
    const newFilters = allActivities && allActivities.reduce((obj, el) => {
      const cleanedCategories = el.categories || []
      cleanedCategories.forEach(currCategory => {
        if (currCategory === '') obj.free = true
        else obj[currCategory] = true
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
    getNewActivities(filtersCopy)
  }

  function getNewActivities (passedFilters = {}, stop = false) {
    const filtersCopy = { ...passedFilters }
    const newActivities = {}
    const doNotWants = []
    const keepList = []
    for (const key in filtersCopy) {
      if (!filtersCopy[key]) doNotWants.push(key)
    }
    const userDoesNotWantFree = doNotWants.includes('free')
    for (const key in filtersCopy) {
      if (filtersCopy[key]) {
        keepList.push(key)
        allActivities.forEach(a => {
          const safeCategories = a.categories || []
          const categoriesWithDoNotWants = [...safeCategories, ...doNotWants]
          const userDoesNotWantFreeAndIsFree = userDoesNotWantFree && a.free
          let add = false
          if (userDoesNotWantFreeAndIsFree) {
            // do nothing
          } else if (categoriesWithDoNotWants.length === Array.from(new Set(categoriesWithDoNotWants)).length) {
            add = true
          } else if (safeCategories.includes(key)) {
            add = true
          }
          if (add) {
            newActivities[a.name] = a
            keepList.push(...safeCategories)
          }
        })
      }
    }
    categories.forEach(c => {
      if (!keepList.includes(c)) filtersCopy[c] = false
      else if (!doNotWants.includes(c)) filtersCopy[c] = true
      else filtersCopy[c] = false
    })
    if (!stop) {
      const newDoNotWants = []
      for (const key in filtersCopy) {
        if (!filtersCopy[key]) newDoNotWants.push(key)
      }
      return getNewActivities(filtersCopy, newDoNotWants.length === doNotWants.length) // go back through with updated filters
    }
    const newCurrentActivities = Object.values(newActivities)
    setCurrentActivities(newCurrentActivities)
    setFilters(filtersCopy)
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
        />
        {
          categories && categories.length
            ? (
              <div className={styles.filters}>
                {
                  categories.map(c => {
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
            )
            : null
        }
      </div>
    </Layout>
  )
}

GetAllEvents.propTypes = {
  back: PropTypes.func,
  category: PropTypes.string,
  header: PropTypes.string,
  source: PropTypes.string,
}

export default connect((state) => state)(GetAllEvents)
