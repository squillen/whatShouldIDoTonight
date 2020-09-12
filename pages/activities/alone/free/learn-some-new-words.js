import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      This is not to be the cynosure of all ears or to practice grandiloquent circumlocution. No, this is at the behoovement of your impending illustrious, splendiferous (but not supercilious!)  locution that will, indubitably, improve your acumen across many fields, and thereby prove quite remunerative!
    </p>
    <p>One of those words is not real. Your job is to figure out which one.</p>
    <p>
      <span>
        To help you, check out
        {' '}
        <LinkTo
          href="https://www.vocabulary.com/"
          label="vocabulary.com"
        />
        {' and '}
        <LinkTo
          href="https://www.dictionary.com/"
          label="dictionary.com"
        />
        {'. '}
        They&apos;ve also got some word &quot;games&quot; you can play.
      </span>
    </p>
    <p>
      <span>
        Once you&apos;ve done that, sign yourself up for some word of the day emails from places like
        {' '}
        <LinkTo
          href="https://www.merriam-webster.com/word-of-the-day"
          label="merriam-webster.com"
        />
        {' '}
        and, again,
        {' '}
        <LinkTo
          href="https://www.dictionary.com"
          label="dictionary.com"
        />
        .
      </span>
    </p>
    <p>
      Be assiduous in your efforts and auspicious events will surely follow. (oh wait, that&apos;s just from a fortune cookie.)
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn some new words"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
