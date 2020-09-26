import Scrollable from '../../components/Scrollable/Scrollable'
import utilStyles from '../../styles/utils.module.css'

export default function displayContent ({ content = [], header, destination }) {
  return (
    content && Array.isArray(content) && content.length
      ? (
        <div className={utilStyles.breakoutSection}>
          <div className={utilStyles.header}>{header}</div>
          <Scrollable destination={destination} content={content} />
        </div>
      )
      : null
  )
}
