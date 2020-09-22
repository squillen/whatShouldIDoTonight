import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do you know how many raffles are going on right now? Not that many, actually.</p>
    <p>No, I&apos;m kidding. They&apos;re fucking everywhere.</p>
    <p>I mean, you&apos;re competing with tons of people, so don&apos;t bet your house on anything, but you can&apos;t win if you never play!</p>
    <Photo
      src="https://media.giphy.com/media/ToMjGpKniGqRNLGBrhu/giphy.gif"
      alt="Jim Carrey in Dumb and Dumber saying 'So you're telling me there's a change?'"
    />
    <p>Here are a few notable raffles to check out:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.expediacruises.com/en-US/corporate/Contest"
          label="Expedia Cruises"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.hgtv.com/about-us/hgtv-sweepstakes"
          label="HGTV"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.bhg.com/sweepstakes/"
          label="Better Home and Garden"
        />
      </li>
    </ul>
    <p>
      <span>
        Or check out
        {' '}
        <LinkTo
          href="https://raffall.com/"
          label="Raffall"
        />
        {' and '}
        <LinkTo
          href="https://www.thebalanceeveryday.com/contests-4161941"
          label="The Balance Everyday"
        />
        {' '}
        for sites dedicated to raffles and contests.
      </span>
    </p>
    <p>
      A word to the wise, though: there&apos;s a good chance you&apos;ll get your email inbox
      blown up by signing up to these raffles. I mean, they gotta get something out of this, too, right??
      Some of the emails/newsletters might be genuinely good, though. But if that&apos;s not something you want,
      consider using an alternative email to your main address.
    </p>
    <Photo
      src="https://media.giphy.com/media/c6W48VCLPF1l8Uu18A/giphy.gif"
      alt="Harry Potter thousands of letters shooting out of fireplace"
    />
    <p>
      Also, make sure that what you&apos;re signing up for is legit. Don&apos;t get scammed!
      Don&apos;t give out any information other than your email and, if you win,
      do your due diligence before giving out any info. They shouldn&apos;t really need anything private
      anyway.
    </p>
    <p>When in doubt, just listen to Moira:</p>
    <Photo
      src="https://media.giphy.com/media/l1J9zYIsjPAyojfri/giphy.gif"
      alt="Moira from Schitt's Creek saying 'It's a scam'"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'netflix/hulu/prime/queue/watch list/my list',
    pageDescription: 'Sign up for some raffles with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Sign up for some raffles"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
