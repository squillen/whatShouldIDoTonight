import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Have some money to spare? The billion dollar boom is <span className={styles.strikeThrough}>probably</span>
        {' '}
        definitely over but it might still prove valuable to have some coin.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/sTmwpUgZqz2JG/giphy.gif"
      alt="Scrooge McDuck diving into a pool of gold coins"
    />
    <p>Here&apos;s a good overview of what bitcoin is, but keep in mind that the source is pro-bitcoin:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="What is Bitcoin? Bitcoin Explained Simply for Dummies" src="https://www.youtube-nocookie.com/embed/41JCpzvnn_0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      If you&apos;re interested, here&apos;s a
      {' '}
      <LinkTo
        href="https://coindiligent.com/should-i-buy-bitcoin"
        label="coindiligent"
      />
      {' '}
      article about whether you should buy bitcoin or not (i.e. do you have &quot;funny money&quot; or not?).
    </p>
    <p>
      <span>
        If it is, you can trade at sites like
        {' '}
        <LinkTo
          href="https://www.etoro.com/en-us/"
          label="etoro"
        />
        {' and '}
        <LinkTo
          href="https://www.coinbase.com/"
          label="coinbase"
        />
        . And if you want even more trading info, check out
        {' '}
        <LinkTo
          href="https://99bitcoins.com/buy-bitcoin/"
          label="this 99bitcoins article"
        />
        {'.'}
      </span>
    </p>
    <p>Either way, invest responsibly, y&apos;all!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'bitcoin/money/make/earn/spend/invest/coinbase/etoro',
    pageDescription: 'Trade bitcoin and (hopefully) make some coin'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Buy some bitcoin"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
