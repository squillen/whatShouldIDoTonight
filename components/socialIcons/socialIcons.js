import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../animations/default'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share'
import * as gtag from '../../lib/gtag'
import utilStyles from '../../styles/utils.module.css'

export default function SocialIcons ({ horizontal, image, description, pageTitle, pageURL, size = 30 }) {
  const handleShare = (action) => {
    gtag.event({
      action,
      label: pageTitle,
      category: 'Social Share',
    })
  }
  const media = image || 'https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/seo/logo.png'
  return (
    <motion.ul variants={stagger} style={horizontal ? { flexDirection: 'row', padding: 0, justifyContent: 'space-between', width: '10rem' } : {}} className={utilStyles.shareIconsContainer}>
      {/* EMAIL */}
      <motion.li variants={fadeInUp}>
        <EmailShareButton
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('email')}
          subject={`This is what you should do tonight: ${pageTitle}`}
        >
          <EmailIcon size={size} round={true} />
        </EmailShareButton>
      </motion.li>
      {/* TWITTER */}
      <motion.li variants={fadeInUp}>
        <TwitterShareButton size={size} round={true} url={pageURL} beforeOnClick={() => handleShare('twitter')}>
          <TwitterIcon size={size} round={true} />
        </TwitterShareButton>
      </motion.li>
      {/* FACEBOOK */}
      <motion.li variants={fadeInUp}>
        <FacebookShareButton
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('facebook')}
        >
          <FacebookIcon size={size} round={true} />
        </FacebookShareButton>
      </motion.li>
      {/* LINE */}
      {/* <motion.li variants={fadeInUp}>
        <LineShareButton
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('line')}
          title={pageTitle}
        >
          <LineIcon size={size} round={true} />
        </LineShareButton>
      </motion.li> */}
      {/* PINTEREST */}
      <motion.li variants={fadeInUp}>
        <PinterestShareButton
          media={media}
          description={description}
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('pinterest')}
        >
          <PinterestIcon size={size} round={true} />
        </PinterestShareButton>
      </motion.li>
      {/* REDDIT */}
      {/* <motion.li variants={fadeInUp}>
        <RedditShareButton size={size} round={true} url={pageURL} beforeOnClick={() => handleShare('reddit')} title={pageTitle}>
          <RedditIcon size={size} round={true} />
        </RedditShareButton>
      </motion.li> */}
      {/* WHATSAPP */}
      {/* <motion.li variants={fadeInUp}>
        <WhatsappShareButton size={size} round={true} url={pageURL} beforeOnClick={() => handleShare('whatsapp')} title={pageTitle}>
          <WhatsappIcon size={size} round={true} />
        </WhatsappShareButton>
      </motion.li> */}
    </motion.ul>
  )
}

SocialIcons.propTypes = {
  pageURL: PropTypes.string,
  horizontal: PropTypes.bool,
  description: PropTypes.string,
  image: PropTypes.string,
  pageTitle: PropTypes.string,
  size: PropTypes.number,
}
