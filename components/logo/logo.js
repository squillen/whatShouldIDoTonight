import Link from 'next/link'
import styles from './logo.module.css'

export default function Logo () {
  return (
    <div className={styles.headerContainer} >
      <Link href='/'>
        <a className={styles.link}>
          <div className={styles.lineContainer}>
            <span>
              <span className={styles.flicker}>what</span>
              should
            </span>
          </div>
          <div className={styles.lineContainer}>i<span className={styles.flicker}>do</span>tonight</div>
          <div className={styles.com}><span className={styles.flickerSlow}>.com</span></div>
        </a>
      </Link>
    </div>
  )
}
