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
        , where you can create some gorgeous sites with basically no coding background.
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
          label="godaddy"
        />
        {' '}
        is good, too.
      </span>
    </p>
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
