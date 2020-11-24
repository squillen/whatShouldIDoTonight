import PropTypes from 'prop-types'
import EmailSignup from '../emailSignup/emailSignup'
import LinkTo from '../linkTo/linkTo'
import styles from './footer.module.css'

export default function Footer () {
  return (
    <div className={styles.footerContainer}>
      <div className="links">
        <div className={styles.contactContainer}>
          <LinkTo
            target={false}
            href="/contact"
            label="contact"
          />
        </div>
      </div>
      <EmailSignup />
    </div>
  )
}

Footer.propTypes = {

}
