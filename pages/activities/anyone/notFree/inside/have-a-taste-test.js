import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      My mom loved doing these when I was a kid to show us that
      non-name-brand items were just as good as name-brand items.
      Little did she know I was just doing it to get more food.
    </p>
    <Photo
      src="https://media.giphy.com/media/ij8AeeqXKFZm0/giphy.gif"
      alt="creepy girl smirking into camera"
    />
    <p>But back to you.</p>
    <p>
      Go to the store and get multiple brands/price ranges of one, some, or all of the following:
    </p>
    <ul>
      <li>Beers</li>
      <li>Coffee</li>
      <li>Olive oil</li>
      <li>Cheese</li>
      <li>Chocolate</li>
      <li>Nut butters (e.g. peanut, almond, etc.)</li>
      <li>Wine</li>
      <li>Alcohols</li>
      <li>Whatever else you can think of</li>
    </ul>
    <p>
      Also remember that you can compare against brands as well as varieties,
      like comparing olive oil to grape seed oil, avocado oil, etc. or peanut butter
      to almond butter, cashew butter, etc.
    </p>
    <p>
      <span>
        If you&apos;re interested,
        {' '}
        <LinkTo
          href="https://theunconventionalroute.com/blind-taste-tests/"
          label="here&apos;s a great article"
        />
        {' '}
        to get you started.
      </span>
    </p>
    <p>
      If you&apos;re with someone who&apos;s a real snob about whatever you&apos;re tasting,
      consider placing some bets on whether or not they actually know what
      the hell they&apos;re talking about.
    </p>
    <p>
      Be prepared for some surprises.
    </p>
    <Photo
      src="https://media.giphy.com/media/H62Q3xZkSdq47ug37Y/giphy.gif"
      alt='Lady doing blind taste test shaking her head no'
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'taste test/fun/chocolate/beer/wine/coffee/cheese/competition',
    pageDescription: 'Have a taste test tonight and see if you can tell the differences'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a taste test"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
