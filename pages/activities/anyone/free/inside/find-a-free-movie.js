import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      &quot;Free&quot; as in Netflix, Hulu, Disney+, Prime, etc. You have one of those, right??
    </p>
    <p>
      <span>
        Check out what to watch on
        {' '}
        <LinkTo
          href="https://www.whats-on-netflix.com/what-to-watch/"
          label="Netflix"
        />
        {', '}
        <LinkTo
          href="https://www.esquire.com/entertainment/music/g30389440/best-shows-on-hulu/"
          label="Hulu"
        />
        {', '}
        <LinkTo
          href="https://editorial.rottentomatoes.com/guide/best-movies-on-amazon-prime-right-now/"
          label="Prime"
        />
        {', or '}
        <LinkTo
          href="https://editorial.rottentomatoes.com/guide/best-disney-movies-to-watch-now/"
          label="Disney+"
        />
        .
      </span>
    </p>
    <p>
      <span>
        If still not, how about checking out these <span className={styles.italic}>actually free</span>
        {' '}
        <LinkTo
          href="https://www.youtube.com/playlist?list=PLyMSG-Q0Oh8cr6AG1jbptCGW5P6n-_Szz"
          label="movies"
        />
        .
      </span>
    </p>
    <p>
      <span>
        Make some
        {' '}
        <LinkTo
          href="https://www.foodnetwork.com/recipes/articles/50-flavored-popcorn-recipes"
          label="gourmet popcorn"
        />
      </span>
      {' '}
      while you&apos;re at it.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Find a free movie"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
