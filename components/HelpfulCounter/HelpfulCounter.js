import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './HelpfulCounter.module.css'
import { updateActivityHelpfulCounts } from '../../lib/helpers/db/requests'

export default function HelpfulCounter ({ activity, source }) {
  const { _id, helpfulCounts = {} } = activity
  const { helpful = 0, unhelpful = 0 } = helpfulCounts
  const [helpfulInState, setHelpfulInState] = useState(helpful)
  const [unhelpfulInState, setUnhelpfulInState] = useState(unhelpful)
  const timeVault = useRef({ helpful, unhelpful })
  let votesObj = {}
  const isWindow = typeof window !== 'undefined'
  if (isWindow) votesObj = localStorage.getItem('votes') || {}
  const votesCopy = { votesObj }
  function adjustHelpfulness (positive) {
    return () => {
      const voted = votesCopy[activity.name || activity.title]
      let newHelpful = helpful || 0
      let newUnhelpful = unhelpful || 0
      let updateHelpful = false
      let updateUnhelpful = false
      // if (!voted) {
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
      // }
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
        votesCopy[activity.name || activity.title] = true
        if (isWindow) localStorage.setItem('votes', votesCopy)
        counts.helpful = newHelpful
      }
      if (newUnhelpful && unhelpful !== newUnhelpful) {
        votesCopy[activity.name || activity.title] = true
        if (isWindow) localStorage.setItem('votes', votesCopy)
        counts.unhelpful = newUnhelpful
      }
      updateActivityHelpfulCounts({ _id, counts, source, title: ((!_id && activity.title) || '') })
    }
  }, [])

  const totalHelpful = Math.abs(helpfulInState - unhelpfulInState)

  return (
    <div className={styles.helpfulCounterContainer}>
      <div className={styles.iconContainers}>
        <div className={styles.countContainer} onClick={adjustHelpfulness(1)}>
          <div className={styles.thumbsUp}>
            <i className="far fa-thumbs-up"></i>
          </div>
        </div>
        <div className={styles.countContainer} onClick={adjustHelpfulness(0)}>
          <div className={styles.thumbsDown}>
            <i className="far fa-thumbs-down"></i>
          </div>

        </div>
      </div>

      <div className={styles.count}>
        {
          unhelpfulInState || helpfulInState
            ? `${helpfulInState} out of ${totalHelpful} ${totalHelpful === 1 ? 'person' : 'people'} found this helpful`
            : 'Be the first to vote'
        }
      </div>

    </div>
  )
}

HelpfulCounter.propTypes = {
  activity: PropTypes.object,
  source: PropTypes.string,
}
