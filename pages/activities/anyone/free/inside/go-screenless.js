import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/KDyjV5smoByXVsYrOC/giphy.gif"
      alt="A girl on The Bachelor saying 'wait, what?'"
    />
    <p>Yup, you read that right: ditch the screens for a night.</p>
    <p>
      I know, I know, that&apos;s like asking a crack addict to stop cold turkey, but
      from the times I&apos;ve done it, I can tell you that it&apos;s well worth it.
    </p>
    <p>
      Unplug the TV, turn off your computer, and put away your phone,
      iPads, iWatch, etc.
    </p>
    <p>
      Put them under lock and key if you can. This shit is addicting.
    </p>
    <Photo
      src="https://media.giphy.com/media/tRGtd0jWj3GYU/giphy.gif"
      alt="Dave Chappelle crack"
    />
    <p>Now you&apos;re probably thinking, &quot;wtf do I do now??&quot;</p>
    <p>Well, don&apos;t worry, we&apos;ve got you:</p>
    <ul>
      <li>
        <LinkTo
          href="/activities/anyone/free/inside/bake-some-cookies"
          label="bake some cookies"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/inside/get-a-good-nights-sleep"
          label="get a good night's sleep"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/inside/get-a-hobby"
          label="get a hobby"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/inside/have-a-taste-test"
          label="have a taste test"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/inside/invite-friends-over"
          label="invite friends over"
        />
      </li>
      <li>rearrange your furniture</li>
      <li>
        <LinkTo
          href="/activities/anyone/free/outside/geocache"
          label="go geocaching"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/outside/go-people-watch"
          label="people watch"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/outside/go-stargazing"
          label="go stargazing"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/alone/free/outside/walk-for-30-minutes"
          label="go for a walk"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/alone/free/inside/get-your-shit-together"
          label="get your shit together"
        />
      </li>
      <li>have a glass of wine and take a bath</li>
      <li>have a glass of wine and do a puzzle</li>
      <li>
        <LinkTo
          href="/activities/anyone/free/outside/go-to-a-park"
          label="go to a park"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/alone/free/inside/meditate-for-10-minutes"
          label="meditate"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/outside/grill-something"
          label="grill something"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/free/outside/watch-a-sunset-and-have-a-picnic"
          label="watch a sunset and have a picnic"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/notFree/outside/go-to-a-comedy-show"
          label="go to a comedy show"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/notFree/outside/go-to-a-driving-range"
          label="go to a driving range"
        />
      </li>
    </ul>

    <p>Once you get all that figured out, shut it all down and enjoy!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'no technology/without screens',
    pageDescription: 'Go without screens for a night with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go screenless!"
      content={userContent}
      timeToComplete="all night"
      noOfPeople="1+"
    />
  )
}

export default connect()(Content)
