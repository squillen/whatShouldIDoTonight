import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import Loading from '../loading/loading'
import Modal from '../modal/modal'
import { signUserUpForEmails } from '../../lib/helpers/db/requests'
import styles from './emailSignup.module.css'

export default function EmailSignup () {
  const [modalToOpen, setModalToOpen] = useState(false)
  const [signingUserUp, setSigningUserUp] = useState(false)
  const [error, setError] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  // HANDLE MODAL
  const modalFunction = {
    showEmailSignupModal,
  }[modalToOpen] || null

  function handleClose () {
    setModalToOpen(false)
    setShowConfirmation(false)
    setError(false)
  }

  const modalContent = modalFunction ? modalFunction() : null

  function showEmailSignupModal () {
    return (
      <div className={styles.emailContainer}>
        <div
          style={showConfirmation
            ? {
              background: 'url(https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80) no-repeat center',
              minHeight: '35vh',
              backgroundSize: 'cover',
            }
            : { background: '#0d2035' }
          }
          className={styles.headerSection}
        >
          <div className={styles.closeButtonContainer}>
            <div
              style={showConfirmation ? { color: 'white' } : { color: '#ffcc00' }}
              className={styles.closeButton}
              onClick={handleClose}
            >
              X
            </div>
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles[showConfirmation ? 'confirmationTitle' : 'title']}>
              { showConfirmation
                ? 'Congrats.'
                : <span><span className={styles.white}>Never</span> be <span className={styles.white}>bored</span> again!<span className={styles.white}>*</span></span>
              }
            </h1>
          </div>
        </div>
        <div className={styles.emailBody}>
          {
            showConfirmation
              ? (
                <div className={styles.emailCTA}>
                  <h1 className={styles.confirmation}>You just became so much cooler.</h1>
                  <Button
                    label="Close"
                    onClick={handleClose}
                  />
                </div>
              )
              : (
                <>
                  <h4 className={styles.emailCTA}>Get ideas, deals, and suggestions sent straight to your inbox before they hit the site!</h4>
                  <div className={styles.inputContainer}>
                    <input onChange={handleUserInput} className={styles.emailInput} type="email" autoComplete="on" placeholder="email" />
                    {error && <div className={styles.errors}>{error.toString()}</div>}
                  </div>
                  <Button
                    label="sign up"
                    onClick={signUserUp}
                  />
                </>
              )
          }
        </div>
        {
          !showConfirmation && (
            <div className={styles.sub}>
              <sub>*You will absolutely be bored again.</sub>
            </div>
          )
        }
      </div>
    )
  }

  // HANDLE INPUT
  function checkIfValidEmail () {
    const test = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return userEmail.match(test)
  }

  function handleUserInput (e) {
    const input = e.target.value
    setUserEmail(input)
  }

  async function signUserUp () {
    const isValidEmail = checkIfValidEmail()
    if (isValidEmail && !signingUserUp) {
      try {
        setSigningUserUp(true)
        const { error } = await signUserUpForEmails(userEmail)
        if (error) setError('That email is already signed up!')
        else {
          setError(false)
          setShowConfirmation(true)
        }
      } catch (e) {
        console.error(e)
        setError('There was a problem signing you up. Can you try that again?')
      } finally {
        setSigningUserUp(false)
      }
    } else {
      console.log('showing error :>> ')
      setError("Oooh you're so close but there seems to be a problem with your email! Check it and try again!")
      // show error
    }
  }

  // HANDLE UI
  const signupText = 'get emails!'
  const handleClick = (str) => setModalToOpen(str === modalToOpen ? false : str)

  return (
    <div className={styles.emailSignupContainer}>
      <div className={styles.mobileSignup}>
        <Button
          label={signupText}
          customStyle={styles.signupButton}
          onClick={() => handleClick('showEmailSignupModal')}
        />
      </div>
      <a
        className={styles.button}
        onClick={() => handleClick('showEmailSignupModal')}
      >
        <span className={styles.rainbowContainer}>
          <svg width="200" height="36" viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.rainbowSVGContainer}>
            <rect x="23.5" y="1.5" width="150" height="33" rx="6.5" stroke="url(#signupButton_linear)" strokeWidth="3" className={styles.rainbow}></rect>
            <defs className={styles.rainbow}>
              <linearGradient id="signupButton_linear" x1="5.86667" y1="18.8571" x2="110.978" y2="18.8571" gradientUnits="userSpaceOnUse" className={styles.rainbow}>
                <stop stopColor="#EC6192" className={styles.rainbow}></stop>
                <stop offset="0.213542" stopColor="#EC4C34" className={styles.rainbow}></stop>
                <stop offset="0.411458" stopColor="#FFBD2B" className={styles.rainbow}></stop>
                <stop offset="0.630208" stopColor="#EBDE56" className={styles.rainbow}></stop>
                <stop offset="0.833333" stopColor="#57C754" className={styles.rainbow}></stop>
                <stop offset="1" stopColor="#53A1EB" className={styles.rainbow}></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className={styles.signupText}>{signupText}</span>
      </a>
      <Modal
        modalContent={modalContent}
        onModalClose={handleClose}
      />
      <Loading loading={signingUserUp} message="signing you up!" />
    </div>
  )
}

EmailSignup.propTypes = {
  handleClick: PropTypes.func,
}
