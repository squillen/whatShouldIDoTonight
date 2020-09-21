import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/Ms0GsGq6lORnq/giphy.gif"
      alt="man dressed up as tuna laying on a bed of fake rice"
    />
    <p>And apparently take some acid ☝😳</p>
    <p>
      If you&apos;re like me, you probably don&apos;t think of making your own
      sushi that often. But you can! And for relatively cheap!
    </p>
    <p>
      <span>
        Find some
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk00yuVUAXLyqIsUH5t99WUPeEltH_A%3A1600633529274&source=hp&ei=ubpnX-KJDoyQtQWU95fYCA&q=asian+supermarket+near+me&oq=asian+supermarket+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAEJIDMgUIABCSAzICCAAyAggAMgIIADIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIIxAnOggIABCxAxCDAToFCAAQsQM6BAgAEApQrQZY81BggFVoBHAAeAGAAfYDiAH1JpIBDDEzLjYuNy4xLjEuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwiiyrPHyPjrAhUMSK0KHZT7BYsQ4dUDCAk&uact=5"
          label="Asian supermarkets"
        />
        {' '}
        or a nicer grocery store near you and see if they have
        {' '}
        <span className={styles.italicAndBold}>sushi-grade</span> fish
        {' '}
        (not just any fish will do!). They should.
      </span>
    </p>
    <p>
      Also get some nori (seaweed sheets) and, instead of just using regular white rice,
      consider getting sushi-grade rice, as well, which is stickier and better suited for, well, sushi.
    </p>
    <p>
      <span>
        A
        {' '}
        <LinkTo
          href="https://amzn.to/33FXmq2"
          label="sushi mat"
        />
        {' '}
        is definitely helpful to make tight rolls, but probably not crucial to quell your random sushi urges.
        {' '}
        If you don&apos;t have a mat (and don&apos;t want to buy one), check out
        {' '}
        <LinkTo
          href="https://minimalistbaker.com/how-to-make-sushi-without-a-mat/"
          label="this article"
        />
        {' '}
        for some helpful tips on how to roll sushi without one.
      </span>
    </p>
    <p>
      But with that, you&apos;ll have the basics of what you need for at-home sushi!
      But, of course, you might want to make it fancier.
    </p>
    <Photo
      src="https://media.giphy.com/media/VlchmIoZPjjYQ/giphy.gif"
      alt="cat walking upright in a top hat"
    />
    <p>☝ that&apos;s you, you fancy fuck.</p>
    <p>
      <span>
        In that case, check out
        {' '}
        <LinkTo
          href="https://www.easyhomemadesushi.com/10-sushi-recipes-with-salmon/"
          label="this article"
        />
        {' and '}
        <LinkTo
          href="http://www.makesushi.com/sushi/"
          label="this site"
        />
        {' '}
        for more specific recipes and ideas.
      </span>
    </p>
    <p>
      Now say wasabi to your new night plans, Branzino, and let the good times roll.
    </p>
    <p>I hate myself soy much.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'sushi/at home/homemade/tuna/salmon',
    pageDescription: 'Cook sushi with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make sushi!"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
