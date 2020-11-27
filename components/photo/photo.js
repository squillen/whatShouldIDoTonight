import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import handleMarkdown from '../../lib/helpers/handleMarkdown'
import styles from './photo.module.css'

export default function Photo ({ src, alt, caption }) {
  console.log('caption :>> ', caption);
  const [enlargePhoto, setEnlargedPhoto] = useState(false)
  return (
    <figure className={styles.photoContainer}>
      <img
        src={src}
        alt={alt}
        className={styles[enlargePhoto ? 'enlargedPhoto' : 'photo']}
        onClick={() => setEnlargedPhoto(!enlargePhoto)}
      />
      {caption && <figcaption className={styles.figcaption}>{handleMarkdown(caption)}</figcaption>}
    </figure>
  )
}

Photo.propTypes = {
  caption: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
