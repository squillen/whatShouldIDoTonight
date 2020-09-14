import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      That title feels kinda rude, like I&apos;m telling you to get a life, but
      I&apos;m actually just telling you to get something to do in your life.
      That&apos;s better, right?? 😅
    </p>
    <p>
      <span>
        Figure out
        {' '}
        <LinkTo
          href="https://www.nytimes.com/guides/smarterliving/how-to-find-a-hobby"
          label="how to find a hobby"
        />
        {' '}
        and then check out this extensive
        {' '}
        <LinkTo
          href="https://www.mantelligence.com/list-of-hobbies/"
          label="list of hobbies"
        />
        .
      </span>
    </p>
    <p>Now have fun finally getting a life, loser. Oh wait, I guess I was just an asshole that whole time.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get a hobby"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
