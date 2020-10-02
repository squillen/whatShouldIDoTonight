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
  const [callDB, setCallDB] = useState(false)
  const [filters, setFilters] = useState({})
  const [categories, setCategories] = useState([])
  const getAllActivities = async () => {
    try {
      const allActivities = await callAPI(`${source}?category=${category}`)
      setAllActivities(allActivities)
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
    } else filtersCopy[c] = !filtersCopy[c]
    setFilters(filtersCopy)
    setCallDB(true)
    // getNewActivities()
  }

  const callDBForNewActivities = async () => {
    const includedCategories = []
    const excludedCategories = []
    for (const key in filters) {
      if (filters[key]) includedCategories.push(key)
      if (!filters[key]) excludedCategories.push(key)
    }
    const query = `${source}?included=${includedCategories}&excluded=${excludedCategories}`
    try {
      const result = await callAPI(query)
      // let newFilters = []
      // result.forEach(activity => newFilters.push(...activity.categories))
      // newFilters = Array.from(new Set(newFilters))
      // const filtersCopy = { ...filters }
      // for (const key in filtersCopy) {
      //   filtersCopy[key] = false
      // }
      // newFilters.forEach(filter => {
      //   filtersCopy[filter] = true
      // })
      // setFilters(filtersCopy)
      setCurrentActivities(result)
      console.log('result.length :>> ', result.length)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    setCallDB(false)
    callDBForNewActivities()
  }, [callDB])

  const handleCategory = (c) => {
    if (c === 'selfImprovement') return 'self improvement'
    if (c === '') return 'free'
    if (c === 'calm') return 'chill'
    if (c === 'food') return 'food & drink'
    if (c === 'read') return 'read & write'
    return c
  }

  if (!calledAPI && allActivities && !allActivities.length) getAllActivities()
  if (!categories.length && allActivities && allActivities.length) getFiltersAndCategories()
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
