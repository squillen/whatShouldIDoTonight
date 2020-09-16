import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

export default function Layout ({ children, home }) {
  const [modalToOpen, setModalToOpen] = useState(false)
  const modalFunction = {
    showEmailSignup
  }[modalToOpen] || null
  const modalContent = modalFunction ? modalFunction() : null
  const handleEmailClick = (str) => setModalToOpen(str === modalToOpen ? false : str)
  const exit = { opacity: 0 }
  return (
    <motion.div
      className={styles.container}
      exit={exit}
      initial="initial"
      animate="animate"
    >
      <DefaultHead />
      <Logo home={home} />
      <main>{children}</main>
      <Modal
        modalContent={modalContent}
        onModalClose={() => setModalToOpen(false)}
      />
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.object
}
