import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './HelpfulCounter.module.css'
import { updateActivity } from '../../lib/helpers/db/requests'

export default function HelpfulCounter ({ activity, source }) {
  const { _id, helpfulCounts = {} } = activity
  const { helpful = 0, unhelpful = 0 } = helpfulCounts
  const [helpfulInState, setHelpfulInState] = useState(helpful)
  const [unhelpfulInState, setUnhelpfulInState] = useState(unhelpful)
  const timeVault = React.useRef({ helpful, unhelpful })

  function adjustHelpfulness (positive) {
    return () => {
      const voted = localStorage.getItem('voted')
      let newHelpful = helpful || 0
      let newUnhelpful = unhelpful || 0
      let updateHelpful = false
      let updateUnhelpful = false
      if (!voted) {
        if (positive) {
          if (helpfulInState - helpful === 1) {
            newHelpful = helpfulInState - 1
            updateHelpful = true
          } else if (helpfulInState === helpful) { // haven't voted yet
            newHelpful = helpfulInState + 1
            updateHelpful = true
          }
        } else {
          if (unhelpfulInState - unhelpful === -1) {
            newUnhelpful = unhelpfulInState + 1
            updateUnhelpful = true
          } else if (unhelpfulInState === unhelpful) { // haven't voted yet
            newUnhelpful = unhelpfulInState - 1
            updateUnhelpful = true
          }
        }
      }
      const timeVaultUpdate = { ...timeVault }
      if (updateHelpful) {
        setHelpfulInState(newHelpful)
        timeVaultUpdate.helpful = newHelpful
      }
      if (updateUnhelpful) {
        setUnhelpfulInState(newUnhelpful)
        timeVaultUpdate.unhelpful = newUnhelpful
      }
      timeVault.current = timeVaultUpdate
    }
  }

  useEffect(() => {
    return () => {
      const newHelpful = timeVault.current.helpful
      const newUnhelpful = timeVault.current.unhelpful
      const counts = { helpful, unhelpful }
      if (newHelpful && helpful !== newHelpful) {
        localStorage.setItem('voted', true)
        counts.helpful = newHelpful
      }
      if (newUnhelpful && unhelpful !== newUnhelpful) {
        localStorage.setItem('voted', true)
        counts.unhelpful = newUnhelpful
      }
      updateActivity(_id, counts, source)
    }
  }, [])

  return (
    <div className={styles.helpfulCounterContainer}>
      <div className={styles.iconContainers}>
        <div className={styles.countContainer} onClick={adjustHelpfulness(1)}>
          <div className={styles.thumbsUp}>
            <i className="far fa-thumbs-up"></i>
          </div>
          {
            helpfulInState && (
              <div className={styles.count}>{helpfulInState}</div>
            )
          }
        </div>
        <div className={styles.countContainer} onClick={adjustHelpfulness(0)}>
          <div className={styles.thumbsDown}>
            <i className="far fa-thumbs-down"></i>
          </div>
          {
            unhelpfulInState && (
              <div className={styles.count}>{unhelpfulInState}</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

HelpfulCounter.propTypes = {
  activity: PropTypes.object,
  source: PropTypes.string,
}
