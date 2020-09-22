import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/ACLA5ilKg8odW/giphy.gif"
      alt="Pikachu doing the shuffle with the caption 'Everyday I'm shufflin'"
    />
    <p>
      Cards, that is. Or the dance. Whatever, you&apos;re bored, right?
    </p>
    <p>Cards:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="How to shuffle cards for beginners // Riffle Shuffle with Bridge in the hands tutorial" src="https://www.youtube-nocookie.com/embed/NdCia_d1u5c" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>Dance:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="HOW TO SHUFFLE DANCE | Evelina" src="https://www.youtube-nocookie.com/embed/RECaepj8LkU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    </div>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'shuffle/cards/shuffling/dance/card tricks/fun/practice',
    pageDescription: 'Practice shuffling. The dance or with cards.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn how to shuffle"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
