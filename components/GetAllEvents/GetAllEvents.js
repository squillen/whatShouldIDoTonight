import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import DefaultHead, { baseDescription, siteTitle } from '../../components/defaultHead'
import Layout from '../layout/layout'
import DisplayAllEvents from '../DisplayAllEvents/DisplayAllEvents'

// HELPERS
import styles from './GetAllEvents.module.css'


function GetAllEvents ({ activities, categoryInfo, source, category = '' }) {
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
      setAllActivities(activities[category])
      setCurrentActivities(activities[category])
    } catch (e) {
      console.error(e)
    } finally {
      setCalledAPI(true)
    }
  }

  function getFiltersAndCategoriesOnLoad () {
    const newFilters = allActivities && allActivities.reduce((obj, el) => {
      const cleanedCategories = el.tags || []
      cleanedCategories.forEach(currCategory => {
        if (currCategory === '') obj.free = true
        else obj[currCategory] = true
      })
      return obj
    }, {})
    const newCategories = newFilters && Object.keys(newFilters).sort()
    newCategories.unshift('all')
    newFilters.all = true
    setFilters(newFilters)
    setCategories(newCategories)
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
    const newActivities = allActivities.reduce((arr, el) => {
      const arrCopy = [...arr]
      if (passedFilters[el.tags[0]]) arrCopy.push(el)
      return arrCopy
    }, [])
    // const filtersCopy = { ...passedFilters }
    // const newActivities = {}
    // const doNotWants = []
    // const keepList = []
    // for (const key in filtersCopy) {
    //   if (!filtersCopy[key]) doNotWants.push(key)
    // }
    // const userDoesNotWantFree = doNotWants.includes('free')
    // for (const key in filtersCopy) {
    //   if (filtersCopy[key]) {
    //     keepList.push(key)
    //     allActivities.forEach(a => {
    //       const safeCategories = a.tags || []
    //       const categoriesWithDoNotWants = [...safeCategories, ...doNotWants]
    //       const userDoesNotWantFreeAndIsFree = userDoesNotWantFree && a.free
    //       let add = false
    //       if (userDoesNotWantFreeAndIsFree) {
    //         // do nothing
    //       } else if (categoriesWithDoNotWants.length === Array.from(new Set(categoriesWithDoNotWants)).length) {
    //         add = true
    //       } else if (safeCategories.includes(key)) {
    //         add = true
    //       }
    //       if (add) {
    //         newActivities[a.name] = a
    //         keepList.push(...safeCategories)
    //       }
    //     })
    //   }
    // }
    // categories.forEach(c => {
    //   if (!keepList.includes(c)) filtersCopy[c] = false
    //   else if (!doNotWants.includes(c)) filtersCopy[c] = true
    //   else filtersCopy[c] = false
    // })
    // if (!stop) {
    //   const newDoNotWants = []
    //   for (const key in filtersCopy) {
    //     if (!filtersCopy[key]) newDoNotWants.push(key)
    //   }
    //   return getNewActivities(filtersCopy, newDoNotWants.length === doNotWants.length) // go back through with updated filters
    // }
    setCurrentActivities(newActivities)
    setFilters(passedFilters)
  }

  const handleCategory = (c) => {
    if (c === 'general') return 'general learning'
    if (c === '') return 'free'
    if (c === 'food') return 'food & drink'
    return c
  }
  const { title, description } = categoryInfo
  return (
    <Layout>
      <DefaultHead title={`${title} - ${siteTitle}`} description={description} />
      <NextSeo
        noindex={true}
        nofollow={true}
        title={`${title} - ${siteTitle}`}
        description={`${description} ${baseDescription}`}
      />
      <div className={styles.contentContainer}>
        <DisplayAllEvents
          allActivities={allActivities}
          activities={currentActivities}
          categoryInfo={categoryInfo}
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
  activities: PropTypes.array,
  categoryInfo: PropTypes.object,
  category: PropTypes.string,
  header: PropTypes.string,
  source: PropTypes.string,
}

export default connect((state) => state)(GetAllEvents)
