import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        First, check out
        {' '}
        <LinkTo
          href="https://www.creativelive.com/photography-guides"
          label="these creativelive"
        />
        {' '}
        guides for some good overviews on photography basics. Check out
        {' '}
        <LinkTo
          href="https://www.creativelive.com/photography-guides/what-makes-a-good-photo?via=photography-guide-hub-freeform_2"
          label="this one"
        />
        {' '}
        in particular for what makes a &quot;good photo&quot;.
      </span>
    </p>
    <p>
      <span>
      Next, assuming you don&apos;t have a dedicated camera just yet, check out the
        {' '}
        <LinkTo
          href="https://iphonephotographyschool.com/mobile-photography-tips/"
          label="iPhone Photography School"
        />
        {' and '}
        <LinkTo
          href="https://blog.hubspot.com/marketing/good-pictures-phone-tips"
          label="this HubSpot article"
        />
        {' '}
        for some ideas on how to best take photos with your phone.
      </span>
    </p>
    <p>
      Have fun and let us know if you took anything your especially proud of! (A picture of your dick doesn&apos;t qualify.)
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get into photography"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
