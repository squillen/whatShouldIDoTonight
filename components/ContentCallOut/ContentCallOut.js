import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './ContentCallOut.module.css'
export default function ContentCallOut ({ source, item = {}, color = 'darkBlue' }) {
  const getStyle = (image) => {
    const backgroundColor = {
      blue: 'rgba(25,110,171,0.999)',
      darkBlue: '#0d2035'
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
        <div className={styles.bodyHeader}>{item.header}</div>
        <div className={styles.bodyContainer}>
          {
            item.contents.map(el => (
              <div key={el} className={styles.bodyDiv}>{el}</div>
            ))
          }
        </div>
      </div>
    )
  }
  const contents = (
    source && item.tagline
      ? createContent()
      : item.contents
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
