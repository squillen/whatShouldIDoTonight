import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        See if there are any
        {' '}
        <LinkTo
          src="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk0219yfp6GHmHxu8uawFZVVUlX8stg%3A1600112495497&ei=b8dfX8jeHcK8sQWMx5GoBg&q=public+tennis+courts+near+me&oq=public+tennis+courts+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyBggAEAcQHjIGCAAQBxAeMgYIABAFEB4yBggAEAUQHjIGCAAQBRAeMgYIABAIEB46BAgjECc6BggAEBYQHjoECAAQHjoICAAQBxAFEB46CAgAEAgQDRAeOgQIABANOggIABAIEAcQHlCoQFjCV2DKWmgCcAB4AYABugGIAfsMkgEEMjIuMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwiI0pPHs-nrAhVCXqwKHYxjBGUQ4dUDCA0&uact=5"
          label="public courts near you"
        />
        .
      </span>
    </p>
    <p>
      If you don&apos;t play or don&apos;t have a racket, consider getting one.
      It&apos;s a really fun sport to get in to at any age.
    </p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://tennishead.net/ultimate-beginners-guide-to-buying-a-tennis-racket/"
          label="this guide"
        />
        {' '}
        to see which racket is best for you. Here are a couple of good beginner options:
      </span>
    </p>
    <ul>
      <li>
        <LinkTo
          href="https://amzn.to/3klsqSv"
          label="Wilson Tour Slam"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2FrArXi"
          label="HEAD Ti.S6"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2E0hTNj"
          label="Wilson Tour Slam Lite"
        />
      </li>
    </ul>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go play tennis"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)