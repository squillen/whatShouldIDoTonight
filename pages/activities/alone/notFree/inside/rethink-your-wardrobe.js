import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO
    <p>When was the last time you updated your wardrobe?</p>
    <p>
      There&apos;s a good chance you should revisit it.
      Our wardrobe says a lot about who we are and we (and styles) are always changing, so shouldn&apos;t our clothes change with that?
      Not to mention the sense of confidence that comes with some new threads (anyone remember the first day of school??)
    </p>
    <p>
      <span>
        Luckily there are lots of places to help you out, like
        {' '}
        <LinkTo
          href="https://www.stitchfix.com/invite/xbm9579xcs?sod=w&som=c"
          label="Stitch Fix"
        />
        {', '}
        of course,
        {' as well as '}
        <LinkTo
          href="https://thread.com"
          label="Thread"
        />
        , where you get personal fashion stylists to help
        {' '}
        figure out your current/future style and give you real recommendations.
        {' '}
        Like, from a person.
      </span>
    </p>
    <p>
      <span>
        Once you&apos;ve got your new style,
        {' '}
        <LinkTo
          href="/activities/alone/free/get-your-shit-together"
          label="donate your old clothes"
        />
      </span>
      .
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Rethink your wardrobe"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
