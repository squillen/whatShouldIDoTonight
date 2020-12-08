import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from '../logo/logo'
import { useRouter } from 'next/router'
import EmailSignup from '../emailSignup/emailSignup'

const categories = [
  { title: 'Do', href: '/do' },
  { title: 'Watch', href: '/watch' },
]

const doCategories = [
  { title: 'Food & Drink', href: '/do/food' },
  { title: 'Fun', href: '/do/fun' },
  { title: 'Learn', href: '/do/learn' },
  { title: 'Improve', href: '/do/improve' },
]

const watchCategories = [
  { title: 'Action', href: '/watch/action' },
  { title: 'Comedy', href: '/watch/comedy' },
  { title: 'Documentary', href: '/watch/documentary' },
  { title: 'Drama', href: '/watch/drama' },
  { title: 'Horror', href: '/watch/horror' },
  { title: 'Ideas', href: '/watch/ideas' },
]

function createSubMenu (items) {
  return (
    <ul id={styles.dropDownList} className={styles.nav__submenu}>
      {
        items.map(item => (
          <li className={styles['nav__submenu-item']} key={item.title}>
            <Link href={item.href} as={item.href}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default function NavBar ({ home }) {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState(router.asPath)

  function ByCategory ({ label, href, categories }) {
    return (
      <Link href={href}>
        <li className={styles['nav__menu-item']} onMouseLeave={() => setShowCategoryMenu(false)} >
          <a onMouseEnter={() => setShowCategoryMenu(true)} onClick={() => setSelectedTab(href)}>
            {label}
          </a>
          {(selectedTab.includes(href) || (selectedTab === '/' && href === '/do')) && <div className={styles.underline} />}
          <div className={styles['submenu-container']}>
            <CSSTransition
              timeout={500}
              classNames="menu-primary"
            >
              <div className={styles.menu}>
                { showCategoryMenu && createSubMenu(categories) }
              </div>
            </CSSTransition>
          </div>
        </li>
      </Link>
    )
  }

  function getMobileCategories () {
    return categories.map(c => (
      <Link href={c.href} as ={c.href} key={c.title}>
        <a className={styles.menuLink}>
          {c.title}
        </a>
      </Link>
    ))
  }

  const toggleOpen = () => setOpenMenu(!openMenu)
  const mobileCategories = getMobileCategories(categories)
  return (
    <div className={styles.navBarContainer}>
      <Logo />
      <div className={styles.rightHalf}>
        <div className={styles.top}>
          <div>
            <EmailSignup />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles[openMenu ? 'mobileNavBlack' : 'mobileNavWhite']} onClick={toggleOpen}>
            <div className={styles[openMenu ? 'changeBar1' : 'bar1']} />
            <div className={styles[openMenu ? 'changeBar2' : 'bar2']} />
            <div className={styles[openMenu ? 'changeBar3' : 'bar3']} />
          </div>
          {
            openMenu
              ? (
                <div className={styles.navbarMenu}>
                  <div className={styles.mobileCategories}>
                    {mobileCategories}
                    {/* {
                  home
                    ? null
                    : (
                      <Link href="/">
                        <a className={styles.menuLink}>Idea Generator</a>
                      </Link>
                    )
                } */}
                  </div>

                </div>
              )
              : null
          }
          <nav className={styles.nav}>
            <ul className={styles.navMenu}>
              <ByCategory label="Do" href="/do" categories={doCategories} />
              <ByCategory label="Watch" href="/watch" categories={watchCategories} />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
