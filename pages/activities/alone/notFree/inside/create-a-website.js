import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Have an idea that you&apos;ve been wanting to get online? Do it! </p>
    <Photo
      src="https://media.giphy.com/media/Rb6unv0ddpPCo/giphy.gif"
      alt="animals scurrying against the backdrop of a brick wall with the caption, 'To the internet!'"
    />
    <p>
      <span>
        It can be quite easy with sites like
        {' '}
        <LinkTo
          href="https://wix.com"
          label="wix"
        />
        {' or '}
        <LinkTo
          href="https://wordpress.com/"
          label="wordpress"
        />
        , where you can create some pretty great sites with basically no coding background, although
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/learn-something-new"
          label="learning to code"
        />
        {' '}
        is never a bad thing 😉
      </span>
    </p>
    <p>
      <span>
        But before you do that, get your domain url from sites like
        {' '}
        <LinkTo
          href="https://www.anrdoezrs.net/click-100215369-13266669"
          label="namecheap"
        />
        , our personal favorite, but
        {' '}
        <LinkTo
          href="https://www.godaddy.com"
          label="GoDaddy"
        />
        {' '}
        is good, too.
      </span>
    </p>
    <p>
      <span>
        And then, get your logos and whatever else designed with the help of those creative people over
        {' '}
        <LinkTo
          href="https://track.fiverr.com/visit/?bta=145219&brand=fiverrcpa"
          label="at fiverr"
        />
        .
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif"
      alt="Kit from Napoleon Dynamite pumping arm and saying 'yes!'"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'namecheap/website/create/wix/godaddy/go daddy/name cheap/url/domain/passion/fun',
    pageDescription: 'Create a website tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Create a website"
      content={userContent}
      timeToComplete="1.5+ hour"
    />
  )
}

export default connect()(Content)
