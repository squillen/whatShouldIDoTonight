import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        I read an article a while back, not
        {' '}
        <LinkTo
          href="https://medium.com/@jhreha/be-a-creator-not-a-consumer-ceb7cddd97ca"
          label="this"
        />
        {' '}
        one but one similar to it, about being a creator vs being a consumer. I&apos;m pretty sure it was by
        {' '}
        <LinkTo
          href="https://amzn.to/33K8vWK"
          label="David Wong"
        />
        , who you should def check out either way for some fun, entertaining reads.
        {' '}
        But I&apos;ve thought about that concept often since then, usually at night when I&apos;m on hour three of mindless TV watching and feeling all-around pretty useless.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/JQtjrjz75ttYY/giphy.gif"
      alt="Edward Norton in Fight Club zoning out watching TV on the couch"
    />
    <p>
      It&apos;s obviously infinitely easier to be a consumer
      but, perhaps less obviously, infinitely more rewarding and satisfying to be a creator.
      And if you read that and thought &quot;Oh, but I&apos;m not the creator type&quot;:
    </p>
    <Photo
      src="https://media.giphy.com/media/3oKIP8quIMUnLdfTAQ/giphy.gif"
      alt="Trombone Short saying 'You're wrong'"
    />
    <p>
      You are, at the very least, capable of learning cool new skills that
      you can use to create new content and ideas (i.e. becoming a &apos;creator&apos;)
      that you can then share with the world or even just a single person you know.
    </p>
    <p>
      <span>
        Start by checking out
        {' '}
        <LinkTo
          href="https://skillshare.com"
          label="Skillshare"
        />.
      </span>
    </p>
    <p>
      People there teach you a huge variety of skills, although it tends to lean towards creative-minded
      activities like how to:
    </p>
    <ul>
      <li>make videos/websites/music/animations</li>
      <li>take photos</li>
      <li>write calligraphy</li>
      <li>write creative/short stories</li>
    </ul>
    <p>But they also offer stuff like how to:</p>
    <ul>
      <li>market yourself/your company</li>
      <li>analyze/get the most out of your business</li>
      <li>build your freelance business</li>
    </ul>
    <p>You&apos;ve got this. Your journey to becoming a creator starts tonight.</p>
    <p>
      <span>
        And if after reading that you realized that you already have some skills you want to share,
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/share-your-skills"
          label="share them"
        />
        !
      </span>
    </p>
    <p>And remember:</p>
    <Photo
      src="https://media.giphy.com/media/rrK7i8w1BhKj6/giphy.gif"
      alt="Napoleon Dynamite saying 'Girls only want boyfriends who have great skills'"
    />
    <p>Same for the reverse, ladies.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/skills/skillshare/photographer/calligraphy/videos/music/animations/short stories',
    pageDescription: 'Learn how to start creating content tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get some skills"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
