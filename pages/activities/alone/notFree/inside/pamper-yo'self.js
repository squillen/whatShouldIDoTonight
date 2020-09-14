import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Do you have a facial mask? How about white strips? Nasal strips? Tea? A good movie?
    </p>
    <p>Ok, now do any/all of those things tonight.</p>
    <p>
      <span>
        Don&apos;t have any of those?
        {' '}
        <LinkTo
          href="https://amzn.to/3b8ayXU"
          label="We"
        />
        {'...'}
        <LinkTo
          href="https://amzn.to/3gEXWZy"
          label="got"
        />
        {'...'}
        <LinkTo
          href="https://amzn.to/2YMolOX"
          label="you"
        />
        {'.'}
      </span>
    </p>
    <p>
      Now turn on a good movie, get a cup of tea (or a glass of wine/whatever) and get ready for a nice, relaxing night &#128522;
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
      title="A happy camper is a camper who pampers"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
