import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './ContentCallOut.module.css'
export default function ContentCallOut ({ source, item = {}, body, color = 'blue' }) {
  const getStyle = (image) => {
    const backgroundColor = {
      blue: 'rgba(25,110,171,0.999)'
    }[color]
    return {
      background: image
        ? `url(${image}) center no-repeat`
        : backgroundColor
    }
  }
  const createContent = () => {
    const { image, name, tagline } = item
    const style = getStyle(image)
    return (
      <div className={styles.sponsoredContentContainer} style={style}>
        <div className={styles.overlay} />
        <div className={styles.contentTitle}>{name}</div>
        <div className={styles.contentBody}>{tagline}</div>
      </div>
    )
  }

  const handleBody = () => {
    return (
      <div className={styles.nonLinkContentContainer} style={getStyle()}>
        <div className={styles.bodyHeader}>{body.header}</div>
        {
          body.contents.map(el => (
            <div key={el} className={styles.bodyDiv}>{el}</div>
          ))
        }
      </div>
    )
  }
  const contents = (
    item.tagline
      ? createContent()
      : body
        ? handleBody()
        : null
  )
  return (
    item.pagePath || source
      ? (
        <Link href={item.pagePath || `/${source}/activity?id=${item._id}` || ''}>
          <a className={styles.contentLink}>
            {contents}
          </a>
        </Link>
      )
      : contents
  )
}

ContentCallOut.propTypes = {
  item: PropTypes.object,
  source: PropTypes.string,
  body: PropTypes.object,
  color: PropTypes.string
}
