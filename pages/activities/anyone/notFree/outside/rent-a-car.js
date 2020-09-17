import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/3ov9jWu7BuHufyLs7m/giphy.gif"
      alt="girl in play car being a baller"
    />
    <p>
      Play the part and act like an uber rich person for the night. Bonus if you can drive stick.
    </p>
    <p>
    If you&apos;ve got a date, impress them for all the wrong reasons and set up a future of lies and distrust.
    </p>
    <p>
      <span>
        Whatever it is,
        {' '}
        <LinkTo
          // TODO ADD AFFILIATE
          href="https://turo.com/"
          label="Turo"
        />
        {' '}
        has you covered. Rent some super nice cars for really not that much.
      </span>
    </p>
    <p>Now get out there and drive it like you rented it. Because you did.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'turo/rent/car/nice car/stick shift/manual/rent a car',
    pageDescription: 'Rent a car with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Rent a nice car for the night"
      content={userContent}
      timeToComplete="2.5+ hours"
    />
  )
}

export default connect()(Content)
