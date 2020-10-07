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
      Did you know that you can make your own sushi pretty easily and cheaply?
      Well, if you didn&apos;t, now you know. And if you did, this is your
      reminder to do it more often!
    </p>
    <p>Here&apos;s what you&apos;re gonna do:</p>
    <ul>
      <li> <span>
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
      </span></li>
      <li>
      Get some nori (seaweed sheets) and, instead of just using regular white rice,
      consider getting sushi-grade rice, as well, which is stickier and better suited for, well, sushi.
      </li>
      <li>
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
      </li>
    </ul>
    <p>
      And with that, you&apos;ll have the basics of what you need for at-home sushi!
    </p>
    <p> </p>
    <p>
      <span>
        But, in case you want to make it fancier, check out
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
    <Photo
      src="https://media.giphy.com/media/VlchmIoZPjjYQ/giphy.gif"
      alt="cat walking upright in a top hat"
    />
    <p>that&apos;s you, fancyface ☝</p>
    <p>
      Now say wasabi to your new night plans, Branzino, and let the good times roll. Like, you know, a sushi roll.
    </p>
    <p>I know, you hate me and my puns soy much.</p>
    <Photo
      src="https://media.giphy.com/media/2UHaIIti8qYdJOzMcE/giphy.gif"
      alt="lady dressed up as a bottle of Kikkoman soy sauce dancing"
    />
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
