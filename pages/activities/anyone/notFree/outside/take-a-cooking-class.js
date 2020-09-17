import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/102xzU5V7M1YOs/giphy.gif"
      alt="Man in chef outfit dropping fries into pot that soon catches on fire"
    />
    <p>Don&apos;t become a gif. (Or I guess just don&apos;t film yourself cooking.)</p>
    <p>
      There&apos;s are a good chance all the classes are already booked out for tonight, but maybe not! And if they are, book it for another night!
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
  const pageInfo = {
    tags: 'cooking class/class/cooking/find',
    pageDescription: 'Find a cooking class near you and learn how to cook'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Take a cooking class"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
