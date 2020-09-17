import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Alcohol makes everything better. Until it doesn&apos;t</p>
    <Photo
      src="https://media.giphy.com/media/j0BKyov6oX9j0AH9Tm/giphy.gif"
      alt="Man about to puke"
    />
    <p>
      <span>
        See if there are any
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk02xGldN3BdY7NyuSwySPqr3AzwdXw%3A1600115140052&ei=xNFfX9HBAoyWsAXJ6oa4DA&q=gin+bar+near+me&oq=gin+bar+&gs_lcp=CgZwc3ktYWIQAxgAMgQIABBDMgIIADIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgjECc6CAgAELEDEIMBOgUIABCxAzoFCAAQkQI6BwgAELEDEEM6BwgAEBQQhwJQ3bcaWODAGmDbzBpoAHAHeACAAV-IAd4EkgEBOJgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab"
          label="places near you"
        />
        and go have a reasonably responsible amount of fun.
      </span>
    </p>
    <p>If not, go get your own gin and make your own bar.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'gin/bar/gin bar/drink/alcohol/drinking',
    pageDescription: 'Find a gin bar near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a gin bar"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
