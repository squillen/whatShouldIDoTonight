import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Is there anything we can&apos;t do from our houses these days?
    </p>
    <Photo
      src="https://media.giphy.com/media/HSLbIjLk2GsBa/giphy.gif"
      alt="wall-e showing us our future of stagnation"
    />
    <p>
      Yea, it&apos;s turning us into fat fucks, but for now let&apos;s just enjoy the perks of tech...
    </p>
    <p>
      <span>
        ...like being able to take music lessons from your house courtesy of sites like
        {' '}
        <LinkTo
          href="https://takelessons.com/"
          label="takelessons.com"
        />
        {' and '}
        <LinkTo
          href="https://www.wyzant.com/"
          label="wyzant.com"
        />
        .
      </span>
    </p>
    <p>
      <span>
      But, actually, you can learn
        {' '}
        <LinkTo
          href="/activities/alone/notFree/inside/take-language-lessons"
          label="more than just music"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/music/tutor/person/wyzant/takelessons/wall-e',
    pageDescription: 'Take music lessons from a person with these helpful tips'
  }
  return (
    <Post
      title="Take some music lessons from a person"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
