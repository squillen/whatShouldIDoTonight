import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DefaultHead from '../defaultHead'
import Logo from '../logo/logo'
import Modal from '../modal/modal'
import EmailSignup from '../emailSignup/emailSignup'
import styles from './layout.module.css'

function showEmailSignup () {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.title}>
        Get things to do right in your inbox
      </div>
    </div>
  )
}

export default function Layout ({ children }) {
  const [modalToOpen, setModalToOpen] = useState(false)
  const modalFunction = {
    showEmailSignup
  }[modalToOpen] || null
  const modalContent = modalFunction ? modalFunction() : null
  const handleEmailClick = (str) => setModalToOpen(str === modalToOpen ? false : str)
  return (
    <div className={styles.container}>
      <DefaultHead />
      <EmailSignup handleClick={handleEmailClick} />
      <Logo />
      <main>{children}</main>
      <Modal
        modalContent={modalContent}
        onModalClose={() => setModalToOpen(false)}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}
