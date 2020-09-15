import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/xTiTnwbEerhszYMTYY/giphy.gif"
      alt="Jim Carrey as Ace Ventura saying 'Good call'"
    />
    <p>Thanks, Jim, I thought so, too.</p>
    <p>Are you stressed? Bored? Angry? Well, just keep calm and Carrey on. The Truman Show, Dumb and Dumber, Ace Ventura, Eternal Sunshine of the Spotless Mind, The Cable Guy?? I mean, come on! The list is basically endless.</p>
    <p>
      <span>
        Rent some from
        {' '}
        <LinkTo
          href="https://amzn.to/33v80zY"
          label="Amazon"
        />
        {' '}
        and don&apos;t be a loo-hoo-zuh-her, throw another shrimp on the barbie,
        {' '}
        and go and totally redeem yourself!
      </span>
    </p>
    <p> Three Jim Carrey references: <FontAwesomeIcon size="1x" icon={faCheck} /></p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Jim Carrey night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)