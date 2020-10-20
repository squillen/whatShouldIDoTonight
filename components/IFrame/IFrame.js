import utilStyles from '../../styles/utils.module.css'
import PropTypes from 'prop-types'

export default function IFrame ({ src, title = '' }) {
  return (
    <iframe
      title={title}
      className={utilStyles.iframe}
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      allowtransparency="true"
    />
  )
}

IFrame.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
}
