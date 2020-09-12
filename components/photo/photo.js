import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './photo.module.css'

export default function Photo ({ src, alt }) {
  const [enlargePhoto, setEnlargedPhoto] = useState(false)
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles[enlargePhoto ? 'enlargedPhoto' : 'photo']}
        onClick={() => setEnlargedPhoto(!enlargePhoto)}
      />
    </>
  )
}

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
