import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Or at least consider it.</p>
    <p>
      <span>
        Check out your
        {' '}
        <LinkTo
          href="https://www.google.com/search?source=hp&ei=cddLX_XbIozdtAaV4IiwDw&q=animal+shelters+near+me&oq=animal+shelters+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBQgAEJIDMgUIABCSAzICCAAyBQgAELEDMgIIADICCAAyAggAMgIIADICCABQ5QdY5Qdg4QpoAHAAeACAAZYBiAGWAZIBAzAuMZgBAKABAqABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi12KKBsMPrAhWMLs0KHRUwAvYQ4dUDCAk&uact=5"
          label="local shelter's"
        />
        {' '}
        website and see if there are any pets in need. Spoiler, there are.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Foster a pet"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
