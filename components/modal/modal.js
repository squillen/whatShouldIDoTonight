import React from 'react'
import PropTypes from 'prop-types'
import styles from './modal.module.css'

export default function Modal ({ modalContent, onModalClose }) {
  return (
    modalContent
      ? (
        <div className={styles.overlay}>
          <div className={styles.modalContainer}>
            <div className={styles.topContainer}>
              <div className={styles.closeButton} onClick={onModalClose}>X</div>
            </div>
            <styles className={styles.contentContainer}>
              {modalContent}
            </styles>
          </div>
        </div>
      )
      : null
  )
}

Modal.propTypes = {
  modalContent: PropTypes.object,
  onModalClose: PropTypes.func
}
