import styles from './logo.module.css'

export default function Header() {
  return (
    <div className={styles.headerContainer} >
      <div>
        <span>
          <span className={styles.flicker}>what</span>
          should 
        </span>
      </div>
      <div>i<span className={styles.flicker}>do</span>tonight</div>
      <div className={styles.com}><span className={styles.flickerSlow}>.com</span></div>
    </div>
  )
}
