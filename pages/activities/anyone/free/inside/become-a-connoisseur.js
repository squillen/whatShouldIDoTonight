import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Get into something. Like, really into it. Be the person that people come to when
      they have a question about something about this.
      This is a great way to develop passions.
    </p>
    <p>Impress your friends and be all like:</p>
    <Photo
      src="https://media.giphy.com/media/k9yjgF1I7mX0k/giphy.gif"
      alt="Steve Carrell being able to tell that a white wine is white"
    />
    <p>
      Consider things like:
    </p>
    <ul>
      <li>
        <LinkTo
          href="https://www.thekitchn.com/9-books-that-will-teach-you-about-coffee-213425"
          label="coffee"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.seriouseats.com/2015/01/tea-for-everyone.html"
          label="tea"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.winemag.com/2015/01/20/wine-for-beginners/"
          label="wine"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.beeradvocate.com/beer/101/"
          label="beer"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.thespruceeats.com/all-about-brandy-760698#:~:text=What%20Is%20Brandy%20Made%20From,apples%2C%20apricots%2C%20and%20cherries."
          label="brandy"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.seriouseats.com/2014/08/bread-making-basics-everything-you-need-to-know-to-start-baking-awesome-bread.html"
          label="bread"
        />
      </li>
    </ul>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'beer/brandy/bread/wine/tea/coffee/learn/fun/connoisseur/beer advocate/wine mage/serious eats/the spruce eats/the kitchn',
    pageDescription: 'Get really into a food over beverage'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Become a connoisseur of something"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
