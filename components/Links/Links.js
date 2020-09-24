import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './Links.module.css'



Links.propTypes = {
  children: PropTypes.array
}

export default connect((state) => state)(Links)
