import PropTypes from 'prop-types'
import Button from '../button/button'
import styles from './emailSignup.module.css'

export default function EmailSignup ({ handleClick }) {
  const signupText = 'Get ideas in your inbox'
  return (
    <div className={styles.emailSignupContainer}>
      <div className={styles.mobileSignup}>
        <Button
          label={signupText}
          customStyle={styles.signupButton}
          onClick={() => handleClick('showEmailSignup')}
        />
      </div>
      <a
        className={styles.button}
        onClick={() => handleClick('showEmailSignup')}
      >
        <span className={styles.rainbowContainer}>
          <svg width="200" height="36" viewBox="0 0 200 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.rainbowSVGContainer}>
            <rect x="1.5" y="1.5" width="196" height="33" rx="6.5" stroke="url(#signupButton_linear)" strokeWidth="3" className={styles.rainbow}></rect>
            <defs className={styles.rainbow}>
              <linearGradient id="signupButton_linear" x1="5.86667" y1="18.8571" x2="110.978" y2="18.8571" gradientUnits="userSpaceOnUse" className={styles.rainbow}>
                <stop stopColor="#EC6192" className={styles.rainbow}></stop>
                <stop offset="0.213542" stopColor="#EC4C34" className={styles.rainbow}></stop>
                <stop offset="0.411458" stopColor="#FFBD2B" className={styles.rainbow}></stop>
                <stop offset="0.630208" stopColor="#EBDE56" className={styles.rainbow}></stop>
                <stop offset="0.833333" stopColor="#57C754" className={styles.rainbow}></stop>
                <stop offset="1" stopColor="#53A1EB" className={styles.rainbow}></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className={styles.signupText}>{signupText}</span>
      </a>
    </div>
  )
}

EmailSignup.propTypes = {
  handleClick: PropTypes.func
}
