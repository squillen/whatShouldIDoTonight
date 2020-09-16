import Link from 'next/link'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import styles from './logo.module.css'
import { stagger, fadeInUp, } from '../../animations/default'


export default function Logo ({ home }) {
  const motionLogo = (
    <motion.div
      className={styles.headerContainer}
      variants={stagger}
    >
      <motion.div variants={fadeInUp} className={styles.lineContainer}>
        <span>
          <span className={styles.flicker}>what</span>
          should
        </span>
      </motion.div>
      <motion.div variants={fadeInUp} className={styles.lineContainer}>i<span className={styles.flicker}>do</span>tonight</motion.div>
      <motion.div variants={fadeInUp} className={styles.com}><span className={styles.flickerSlow}>.com</span></motion.div>
    </motion.div>
  )

  const staticLogo = (
    <div className={styles.headerContainer}>
      <div className={styles.lineContainer}>
        <span>
          <span className={styles.flicker}>what</span>
        should
        </span>
      </div>
      <div className={styles.lineContainer}>i<span className={styles.flicker}>do</span>tonight</div>
      <div className={styles.com}><span className={styles.flickerSlow}>.com</span></div>
    </div>
  )
  return (
    <Link href='/'>
      <a className={styles.link}>
        {
          home
            ? motionLogo
            : staticLogo
        }
      </a>
    </Link>

  )
}

Logo.propTypes = {
  home: PropTypes.bool
}
