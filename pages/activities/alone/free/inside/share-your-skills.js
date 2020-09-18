import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        If you&apos;ve got some skills, share them. With
        {' '}
        <LinkTo
          href="https://skillshare.com"
          label="Skillshare"
        />.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/5ns3JbjHIS6ZZI3A8H/giphy.gif"
      alt="Woman doing what looks like very impressive/difficult juggling"
    />
    <p>
      Ok, those might not be exactly the kind of skills you can share there, but you can do almost anything else, although it tends to lean towards creative-minded
      activities, like how to:
    </p>
    <ul>
      <li>make videos/websites/music/animations</li>
      <li>take photos</li>
      <li>write calligraphy (nerd alert)</li>
      <li>write creative/short stories</li>
    </ul>
    <p>But they also offer stuff like how to:</p>
    <ul>
      <li>market yourself/your company</li>
      <li>analyze/get the most out of your business</li>
      <li>build your freelance business</li>
    </ul>
    <p>
      <span>
        If you don&apos;t have any skills,
        {' '}
        <LinkTo
          href="/activities/alone/notFree/inside/get-some-skills"
          label="get some"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/read/educate/The Wall Street Journal/The Morning Brew/The Skimm/sound smart at parties',
    pageDescription: 'Educate yourself on a variety of topics and make yourself a better, more informed person with these tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Share your skills"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
