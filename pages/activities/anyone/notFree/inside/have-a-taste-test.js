import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE
    <p>
      There&apos;s are a good chance they&apos;re already booked out for tonight, but maybe not! And if they are, book it for another night!
    </p>
    <p>
      <span>
        Check
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk02qdZ4_6D3jL2Gy0Z0tbPefuCTieQ%3A1600050472090&source=hp&ei=KNVeX_bOAYnusQWenrCADg&q=cooking+classes+near+me&oq=cooking+classes+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAEJIDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BwgjEOoCECc6BAgjECc6BQgAEJECOggIABCxAxCDAToFCAAQsQNQ3g5YxClg3itoAXAAeAGAAZYDiAHbG5IBCjExLjQuNy4wLjGYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwj2gojAzOfrAhUJd6wKHR4PDOAQ4dUDCAk&uact=5"
          label="it out"
        />
        {' '}
        and get ready to say bon appetit!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a taste test"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
