import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/1UKk8T5Xq4yDC/giphy.gif"
      alt="Man rotating while holding selfie stick and scenery changes behind him to different locations"
    />
    <p>You&apos;ve been saying that you&apos;re gonna go to Italy/Maine/Cuba/Costa Rica/wherever for ages now. Do it!</p>
    <p>
      <span>
        If you haven&apos;t been kicking any ideas around,
        {' '}
        <LinkTo
          href="/activities/anyone/free/inside/plan-a-trip"
          label="start to"
        />
      </span>
      ! And book it!
    </p>
    <p>
      <span>
        Once you&apos;re set, check out sites like
        {' '}
        <LinkTo
          href="https://www.priceline.com/"
          label="priceline"
        />
        {', '}
        <LinkTo
          href="https://www.agoda.com"
          label="agoda"
        />
        {', '}
        <LinkTo
          href="https://www.kayak.com/"
          label="kayak"
        />
        {' '}
        for flights/hotels/rental cars and sites like
        {' '}
        <LinkTo
          href="https://wwww.hotels.com/"
          label="hotels.com"
        />
        {', '}
        <LinkTo
          href="https://www.vrbo.com/"
          label="vrbo"
        />
        {' '}
        for even more special travel housing options.
      </span>
    </p>
    <p>
      See which times are best/cheapest for you, but make sure those times coincide with the time of the year that the weather/popularity is what you want, too!
    </p>
    <p>
      <span>
        And, if you need any new luggage,
        {' '}
        <LinkTo
          href="https://www.ebags.com/"
          label="ebags"
        />
        {' '}
        has def got you covered. Otherwise,
        {' '}
        <LinkTo
          href="https://www.travelpro.com/"
          label="travelpro"
        />
        {' '}
        makes some of the best damn luggage out there.
      </span>
    </p>
    <p>Bon voyage!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: `
      plan/travel/book/priceline/agoda/kayak/hotels/hotels.com/vrbo/planes/airplanes/ebags/luggage/travelpro
    `,
    pageDescription: 'Book your next travel destination with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Book your next travel destination"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
