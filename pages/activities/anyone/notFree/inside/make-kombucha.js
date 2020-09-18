import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      You know that stuff that you buy for like $4 a bottle?
      You can make that yourself pretty damn easily and cheaply, it just takes a couple weeks to start.
    </p>
    <p>
      <span>
        First, you gotta make the
        {' '}
        <LinkTo
          href="https://www.healthline.com/nutrition/kombucha-scoby#what-it-is"
          label="SCOBY"
        />
        , which, admittedly, kinda looks like a eugenics program gone wrong.
      </span>
    </p>
    <Photo
      src="https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/images/scoby.jpg"
      alt="SCOBY in kombucha"
    />
    <p>That little demon embryo is gonna take a week or two to grow. Maybe more. But after that comes the actual kombucha making!</p>
    <p>Um, but that actually takes another week or so...but tonight is the night to start the process!</p>
    <p>
      <span>
        Here&apos;s a good
        {' '}
        <LinkTo
          href="https://www.delish.com/cooking/recipe-ideas/a26297879/how-to-make-kombucha-recipe/"
          label="recipe to follow"
        />
        {' '}
        that nicely lays it all out for you.
      </span>
    </p>
    <p>And here are some of the things you&apos;re gonna need:</p>
    <ul>
      <li>
        <LinkTo
          href="https://amzn.to/3hQ0tks"
          label="A wide-mouth jar"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3c9VAkK"
          label="Some cheesecloth"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/33Mqegy"
          label="Some bottles to store it in"
        />
      </li>
    </ul>
    <p>And now you&apos;re ready to make some kombucha, you dirty hippie.</p>
    <Photo
      src="https://media.giphy.com/media/bhJhZlB1oR9Pa/giphy.gif"
      alt="old hippie dancing"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'kombucha/delish/delish.com/scoby',
    pageDescription: 'Make kombucha with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make kombucha"
      content={userContent}
      timeToComplete="a while..."
    />
  )
}

export default connect()(Content)
