
import styles from './Disqus.module.css'

import { DiscussionEmbed } from 'disqus-react'

const Disqus = ({ article, url }) => {
  const disqusShortname = 'whatshouldidotonight'
  const env = url.includes('localhost') ? 'dev' : 'prod'
  const disqusConfig = {
    url,
    identifier: `${article._id}_${env}`,
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

export default Disqus
