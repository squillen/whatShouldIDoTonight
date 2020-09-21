import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Create a savings account for your loveable little shithead,
        {' '}
        <LinkTo
          href="https://pocketsense.com/open-savings-account-unborn-child-4810896.html"
          label="even if you don&apos;t have any yet"
        />
        !
      </span>
    </p>
    <p>That&apos;s right, you can start saving now for your kid. The earlier the better!</p>
    <Photo
      src="https://media.giphy.com/media/S7K9EsqHvTGaOGmfKd/giphy.gif"
      alt="person putting change into hopping piggy bank on endless cycle"
    />
    <p>
      A savings account for them is really a savings account for you since
      you hopefully won&apos;t have to spend more in the future.
    </p>
    <p>You can do so by creating a custodial account, a 529 college savings plan, or even just a simple savings or brokerage account.</p>
    <p>
      <span>
        And if you&apos;re thinking about investing,
        {' '}
        <LinkTo
          href="/activities/alone/notFree/inside/buy-some-stocks"
          label="hop over here"
        />
        {' '}
        and get started!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'savings account/children/invest/529 plan/college/custodial account',
    pageDescription: 'Create a savings account for your kid with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Create a savings account for your kid"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
