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
  WhatsappIcon
} from 'react-share'
import * as gtag from '../../lib/gtag'
import utilStyles from '../../styles/utils.module.css'

export default function SocialIcons ({ pageTitle, pageURL, size = 30 }) {
  const handleShare = (action) => {
    gtag.event({
      action,
      label: pageTitle,
      category: 'Social Share'
    })
  }
  return (
    <motion.div variants={stagger} className={utilStyles.shareIconsContainer}>
      {/* EMAIL */}
      <motion.div variants={fadeInUp}>
        <EmailShareButton
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('email')}
          subject={`This is what you should do tonight: ${pageTitle}`}
        >
          <EmailIcon size={size} round={true} />
        </EmailShareButton>
      </motion.div>
      {/* TWITTER */}
      <motion.div variants={fadeInUp}>
        <TwitterShareButton size={size} round={true} url={pageURL} beforeOnClick={() => handleShare('twitter')}>
          <TwitterIcon size={size} round={true} />
        </TwitterShareButton>
      </motion.div>
      {/* FACEBOOK */}
      <motion.div variants={fadeInUp}>
        <FacebookShareButton
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('facebook')}
        >
          <FacebookIcon size={size} round={true} />
        </FacebookShareButton>
      </motion.div>
      {/* LINE */}
      <motion.div variants={fadeInUp}>
        <LineShareButton
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('line')}
          title={pageTitle}
        >
          <LineIcon size={size} round={true} />
        </LineShareButton>
      </motion.div>
      {/* PINTEREST */}
      <motion.div variants={fadeInUp}>
        <PinterestShareButton
          media="https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/seo/logo.png"
          size={size}
          round={true}
          url={pageURL}
          beforeOnClick={() => handleShare('pinterest')}
        >
          <PinterestIcon size={size} round={true} />
        </PinterestShareButton>
      </motion.div>
      {/* REDDIT */}
      <motion.div variants={fadeInUp}>
        <RedditShareButton size={size} round={true} url={pageURL} beforeOnClick={() => handleShare('reddit')} title={pageTitle}>
          <RedditIcon size={size} round={true} />
        </RedditShareButton>
      </motion.div>
      {/* WHATSAPP */}
      <motion.div variants={fadeInUp}>
        <WhatsappShareButton size={size} round={true} url={pageURL} beforeOnClick={() => handleShare('whatsapp')} title={pageTitle}>
          <WhatsappIcon size={size} round={true} />
        </WhatsappShareButton>
      </motion.div>
    </motion.div>
  )
}

SocialIcons.propTypes = {
  pageURL: PropTypes.string,
  pageTitle: PropTypes.string,
  size: PropTypes.number
}
