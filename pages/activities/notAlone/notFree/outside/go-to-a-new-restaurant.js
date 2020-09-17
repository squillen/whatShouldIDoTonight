import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Check out the
        {' '}
        <LinkTo
          href="https://www.google.com/search?q=new+restaurants+near+me&spell=1&sa=X&ved=2ahUKEwjjro-utMPrAhWbGs0KHeTyDTkQBSgAegQIHBAn&biw=1440&bih=770&dpr=2"
          label="newest restaurants near you"
        />
        {' '}
        and pick one without even looking at the reviews (if they even have any yet!).
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'new restaurant/cuisine/food/eat',
    pageDescription: 'Find a new restaurant to go to with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a new restaurant"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
