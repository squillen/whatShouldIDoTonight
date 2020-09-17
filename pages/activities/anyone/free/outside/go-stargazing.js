import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk00gmbGhq152elCGrsVabX14LG0rAw%3A1600094416297&source=hp&ei=0IBfX_WfDsGEsAXxlK-4Dg&q=stargazing+near+me&oq=stargazing+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBQgAEJIDMgUIABCSAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAEJECOggIABCxAxCDAToECAAQQzoHCAAQsQMQQzoKCAAQsQMQgwEQQzoICAAQsQMQkQJQ9AVY-xtgpR1oAHAAeACAAbQCiAH7GpIBBzAuOC42LjKYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwj1x6Wa8OjrAhVBAqwKHXHKC-cQ4dUDCAk&uact=5"
          label="Find some"
        />
        {' '}
        places near you and get out your blanket and hot chocolate (and a camera if you have one!)
        {' '}
        and get ready for a nice, relaxing night under the world&apos;s oldest show.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'outside/stargaze/stars/nature/night/sky',
    pageDescription: 'Get outside and stargaze with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go stargazing"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
