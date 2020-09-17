import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do you think you look pretty good?</p>
    <Photo
      src="https://media.giphy.com/media/AjkKC77JZVCEg/giphy.gif"
      alt="The Rock with his fanny pack"
    />
    <p>So did Dwayne. Don&apos;t be a 1980&apos;s Dwayne. Do be an any-other-decade Dwayne, though.</p>
    <p>
      Our wardrobe says a lot about who we are and we (and styles) are always changing, so shouldn&apos;t our clothes change with that?
      Not to mention the sense of confidence that comes with some new threads (anyone remember the first day of school??)
    </p>
    <p>
      <span>
        Luckily there are lots of places to help you out, like
        {' '}
        <LinkTo
          href="https://www.stitchfix.com/invite/hrj7rwh5vb?sod=w&som=c"
          label="Stitch Fix"
        />
        , where you&apos;ll also get a credit of $25 when you use that link.
      </span>
    </p>
    <p>
      <span>
        Or, you can also check out
        {' '}
        <LinkTo
          href="https://www.thread.com/SaUuUflamNHZE4w259IgQm9yMTuaCqfXU"
          label="Thread"
        />
        , where you&apos;ll actually get a $30 credit, and see if that appeals to you more.
      </span>
    </p>
    <p>
      Either way, you&apos;ll get personal fashion stylists to help
      figure out your current/future style and to give you real recommendations.
      Like, from a real, live human being 😲
    </p>
    <p>
      <span>
        Once you&apos;ve got your new style,
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/get-your-shit-together"
          label="donate your old clothes"
        />
      </span>
      .
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'wardrobe/new/fashion/new clothes/Thread/StitchFix/Stich Fix/get hip',
    pageDescription: 'Update your fashion with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Rethink your wardrobe"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
