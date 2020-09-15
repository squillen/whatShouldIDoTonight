import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/l0HU3GIUuoOX2U4H6/giphy.gif"
      alt="Tommy Wiseau in 'The Room' asking 'Why? Why is this happening to me? Why?"
    />
    <p>You might be having the same feelings about your night right now, but don&apos;t worry, Tommy is here to help.</p>
    <p>
      <span>
        <LinkTo
          href="https://en.wikipedia.org/wiki/Tommy_Wiseau"
          label="He"
        />
      </span>
      {' '}
      is unfortunately prolific. Or maybe fortunately, you decide.
    </p>
    <p>
      <span>
        <LinkTo
          href="https://amzn.to/2RwbwnT"
          label="Check out"
        />
      </span>
      {' '}
      some of his movies and prepare to be gobsmacked, Mark.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Tommy Wiseau night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
