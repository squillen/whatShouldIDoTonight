import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

// COMPONENTS
import DefaultHead from '../defaultHead'
import NavBar from '../NavBar/NavBar'
import Modal from '../modal/modal'
import Footer from '../footer/footer'
import styles from './layout.module.css'

export default function Layout ({ children, home }) {
  const [modalToOpen, setModalToOpen] = useState(false)
  const modalFunction = {}[modalToOpen] || null
  const modalContent = modalFunction ? modalFunction() : null
  const exit = { opacity: 0 }
  return (
    <motion.div
      className={styles.container}
      exit={exit}
      initial="initial"
      animate="animate"
      key="layout-div"
    >
      <NavBar home={home} />
      <div className={styles.childrenContainer}>
        <main>{children}</main>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
      <Modal
        modalContent={modalContent}
        onModalClose={() => setModalToOpen(false)}
      />
    </motion.div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
  home: PropTypes.bool,
}
