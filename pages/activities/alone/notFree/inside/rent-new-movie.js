import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Here&apos;s what you&apos;re gonna do:</p>
    <p>
      <ol>
        <li>
          <span>
            Check out the newest movies on
            {' '}
            <LinkTo
              href="https://amzn.to/3gv2yBs"
              label="Amazon"
            />
          </span>
        </li>
        <li>Rent one</li>
        <li>
          <span>
            Find some
            {' '}
            <LinkTo
              href="https://www.foodnetwork.com/recipes/articles/50-flavored-popcorn-recipes"
              label="gourmet popcorn"
            />
          </span>
        </li>
        <li>Get that shit poppin&apos;</li>
      </ol>
    </p>
    <Photo
      src="https://media.giphy.com/media/xT8qBnzRIMESUXqEgw/giphy.gif"
      alt="Woman ferociously eating popcorn in Scary Movie"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'rent/movie/new/fun/tom cruise/adam driver/jamie foxx/amazon prime',
    pageDescription: 'Watch the newest rentable movies tonight. You have our blessing.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Rent a new movie"
      content={userContent}
      timeToComplete="1+ hours"
    />
  )
}

export default connect()(Content)
