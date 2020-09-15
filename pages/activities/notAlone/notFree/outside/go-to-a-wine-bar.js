import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/zx6Tsme145Eoo/giphy.gif"
      alt="Endless pour of wine"
    />
    <p>
      When you drink wine, you&apos;re not getting drunk,
      you&apos;re getting classy and worldly.
    </p>
    <p>
      <span>
        See if there are any
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk01vbtc-a9n_UyYd9A6k_oPNXy850Q%3A1600115829005&ei=dNRfX535PImWtQXLzYz4CQ&q=wine+bar+near+me&oq=wine+bar+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIGCAAQBxAeMgIIADICCAAyAggAMgYIABAHEB4yBggAEAcQHjIGCAAQBxAeOgQIABBHULafEVicoRFgrqMRaABwAngAgAFeiAGqApIBATSYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwidg9n8v-nrAhUJS60KHcsmA58Q4dUDCA0&uact=5"
          label="places near you"
        />
        and go have a reasonably responsible amount of fun.
      </span>
    </p>
    <p>If not, go get your own wines and make your own wine bar.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go to a wine bar"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
