import Scrollable from '../../components/Scrollable/Scrollable'
import utilStyles from '../../styles/utils.module.css'

export default function displayContent ({ content = [], header }) {
  return (
    content.length
      ? (
        <div className={utilStyles.breakoutSection}>
          <div className={utilStyles.header}>{header}</div>
          <Scrollable content={content} />
        </div>
      )
      : null
  )
}
