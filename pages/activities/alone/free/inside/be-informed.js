import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Sound smart at parties, but don&apos;t, you know, be
        {' '}
        <LinkTo
          href="https://youtu.be/Kb22Dcrizp0?t=115"
          label="that"
        />
        {' '}
        guy.
      </span>
    </p>
    <p>
      Add something useful to the comments section. Just kidding, don&apos;t look at the comments. Ever.
    </p>
    <p>
      Learn about elections and candidates, local policies, the stock market,
      money management, that new invasive species that&apos;s taking over.
      Just learn and be informed, Einstein!
    </p>
    <Photo
      src="https://media.giphy.com/media/3ohs88j0jPszpGCbYY/giphy.gif"
      alt="Einstein infinite loop"
    />
    <p>
      <span>
        To start, check out
        {' '}

        <LinkTo
          href="http://www.theskimm.com/?r=1f162672"
          label="the Skimm'"
        />
        {' '}
        and the
        {' '}
        <LinkTo
          href="https://www.morningbrew.com/daily/r/?kid=4ddcaea1"
          label="Morning Brew"
        />
        {' '}
        to get informed more easily and quickly (fo&apos; free!). And yes, those are my personal referral codes, and no, I don&apos;t get anything from them (besides bragging rights).
      </span>
    </p>
    <p>
      Then, once you&apos;re ready to play with the big dogs and go straight to the source, sign up for a subscription to
      {' '}
      <LinkTo
        href="https://store.wsj.com/shop/us/us/wsjuelnsb20/?trackingCode=aaqwghw1&cid=WSJ_SCH_GOO_ACQ_NA&n2IKsaD9=n2IKsaD9&Pg9aWOPT=Pg9aWOPT&Cp5dKJWb=Cp5dKJWb&APCc9OU1=APCc9OU1&tier_1=US%20-%20Acquisition%20-%20Search%20-%20DR%20-%20Brand%20-%20Core%20Offer%20-%20Top%20KW%20-%20Exact&tier_2=bing&tier_3=US%20-%20Acquisition%20-%20Search%20-%20DR%20-%20Brand%20-%20Core%20Offer%20-%20Top%20KW%20-%20Exact&tier_4=Brand%20-%20Top%20Tier%20-%20Exact%20-%20Wall%20Street%20Journal&tier_5=wall%20street%20journal%20journal"
        label="The Wall Street Journal"
      />
      {' '}
      where you get professional, unbiased facts on important stories. (Sorry, Uncle Don, you and your facebook articles just don&apos;t know shit.) Yea, it might seem like it&apos;s a little on the pricier side in the age of &quot;free&quot; news, but you definitely get what you pay for.
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
      title="Be informed"
      content={userContent}
      timeToComplete="1 hour"
    />
  )
}

export default connect()(Content)
