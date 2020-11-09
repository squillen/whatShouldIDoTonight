import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import utilStyles from '../../styles/utils.module.css'
import { fadeInUp } from '../../animations/default'

export default function displayCategoryOptions ({ content = [], header = '', ref }) {
  const router = useRouter()
  const handleClick = () => {
    const cleanedHeader = header.toLowerCase().split(' ').join('_')
    router.push(`#${cleanedHeader}`)
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    (content && Array.isArray(content) && content.length)
      ? <motion.div
        key={header}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={utilStyles.categoryOption}
        variants={fadeInUp}
        onClick={handleClick}
      >
        {header}
      </motion.div>
      : null
  )
}
