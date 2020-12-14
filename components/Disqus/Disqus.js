
import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import styles from './Disqus.module.css'

const Disqus = ({ article, url }) => {
  const disqusShortname = 'whatshouldidotonight'
  const env = url.includes('localhost') ? 'dev' : 'prod'
  const disqusConfig = {
    url,
    identifier: `${article._id}_${env}_0`, // hacky bug fix
    title: article.name,
  }
  return (
    <div className={styles.commentsSection}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

Disqus.propTypes = {
  article: PropTypes.object,
  url: PropTypes.string,
}

export default Disqus
