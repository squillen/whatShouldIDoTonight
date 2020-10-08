import Link from 'next/link'
import Scrollable from '../../components/Scrollable/Scrollable'
import utilStyles from '../../styles/utils.module.css'

export default function displayContent ({ content = [], header, source, path, ref, homeRef }) {
  return (
    content && Array.isArray(content) && content.length
      ? (
        <div className={utilStyles.breakoutSection} key={header}>
          <div className={utilStyles.displayContentHeaderContainer}>
            <div className={utilStyles.leftHeaderContainer}>
              <Link href={`/${source}/all?category=${path || header.toLowerCase()}`}>
                <a>
                  <span className={utilStyles.displayContentHeader} ref={ref}>{header}</span>
                  {' '}
                  <span className={utilStyles.seeAll}>see all</span>
                </a>
              </Link>
            </div>
            <div className={utilStyles.rightHeaderContainer}>
              <div className={utilStyles.bounce}>
                <span className={utilStyles.fa} onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}>
                  <i className="fas fa-chevron-up"></i>
                </span>
              </div>
            </div>
          </div>
          <Scrollable source={source} content={content} />
        </div>
      )
      : null
  )
}
