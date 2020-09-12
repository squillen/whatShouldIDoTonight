import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
    Sometimes you need to be reminded to treat yourself. This is your reminder.
    </p>
    <p>
      If you&apos;ve got face masks, whitening strips, nasal pore strips, that kinda gross foot stone thing, and the like, go ahead and use any/all of those.
    </p>
    <p>
      <span>
        If not, check out
        {' '}
        <LinkTo
          href="https://www.thepennyhoarder.com/save-money/diy-spa-day-for-cheap/"
          label="this"
        />
        {' '}
        shit out.
      </span>
    </p>
    <p>
      Now turn on a good movie, get a cup of tea (or a glass of wine/whatever) and get ready for a cheap, relaxing night &#128522;
    </p>
    <p className={styles.italic}>
      p.s. this goes for guys, too, &apos;cause remember, real men don&apos;t give a shit.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="A happy camper is a camper who pampers...fo' free!"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
