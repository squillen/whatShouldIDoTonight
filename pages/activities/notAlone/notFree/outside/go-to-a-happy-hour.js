import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/QDJYuIq7UV3j2/giphy.gif"
      alt="Cool mom serving happy hour drinks to kids in Mean Girls"
    />
    <p>Are you in time for a happy hour?</p>
    <p>
      <span>
        See which ones are
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk02LvNDouCFiokbthKOUSwY1CCBkKQ%3A1600117382050&source=hp&ei=hdpfX_j0PJH-sAXgtpDICQ&q=happy+hours+near+me&oq=happy+hours+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAEJIDMgUIABCSAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAELEDOggIABCxAxCDAToECAAQQzoFCAAQkQI6BwgAELEDEEM6CAgAELEDEJECOgcIABAUEIcCUN8IWNMaYIodaABwAHgDgAHLA4gB2iaSAQkwLjUuOS40LjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwi4y5zhxenrAhURP6wKHWAbBJkQ4dUDCAk&uact=5"
          label="near you"
        />
      </span>
      and then go get classy drunk for cheap.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'happy hour/near you/drink/alcohol/cheap/food/drinks',
    pageDescription: 'Find happy hours near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a happy hour?"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
