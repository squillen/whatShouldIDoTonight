import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styles from './photo.module.css'

export default function Photo ({ src, alt }) {
  const [enlargePhoto, setEnlargedPhoto] = useState(false)
  return (
  // <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
    <img
      src={src}
      alt={alt}
      className={styles[enlargePhoto ? 'enlargedPhoto' : 'photo']}
      onClick={() => setEnlargedPhoto(!enlargePhoto)}
    />
  )
}

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
