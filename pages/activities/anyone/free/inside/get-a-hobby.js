import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      I kinda feel like an asshole when I say that, like I&apos;m telling you to get a life, but
      I&apos;m just telling you to get something to do in your life.
      That&apos;s better, right?? 😅
    </p>
    <p>
      But like James says,
    </p>
    <Photo
      src="https://media.giphy.com/media/YhK2luXg423VS/giphy.gif"
      alt="James Bond saying 'Everybody needs a hobby'"
    />
    <p>
      <span>
        First, figure out
        {' '}
        <LinkTo
          href="https://www.nytimes.com/guides/smarterliving/how-to-find-a-hobby"
          label="how to find a hobby"
        />
        {' '}
        and then check out this extensive
        {' '}
        <LinkTo
          href="https://www.mantelligence.com/list-of-hobbies/"
          label="list of hobbies"
        />
        .
      </span>
    </p>
    <p>
      Now have fun finally getting a life, loser. Oh wait, I guess I
      was being just an asshole that whole time 😯
    </p>
    <p>Just kidding 😘</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'hobby/fun/activities/passion/ny times/nytimes/new york times/hobbies/find something to do',
    pageDescription: 'Find a new hobby with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get a hobby"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
