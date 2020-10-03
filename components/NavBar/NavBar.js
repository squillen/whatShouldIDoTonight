import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from '../logo/logo'

const categories = [
  { title: 'Do', href: '/categories/do' },
  { title: 'Learn', href: '/categories/learn' },
  { title: 'Listen', href: '/categories/listen' },
  { title: 'Watch', href: '/categories/watch' },
  { title: 'Eat', href: '/categories/eat' },
  { title: 'Read', href: '/categories/read' }
  // { title: 'Deals', href: '/categories/deals' },
  // { title: 'Sites', href: '/categories/sites' },
  // { title: 'Music', href: '/categories/music' },
]

const activities = [
  { title: 'Alone', href: '/categories/activities?status=alone' },
  { title: 'Not Alone', href: '/categories/activities?status=notAlone' }
]

function createSubMenu (items) {
  return (
    <ul id={styles.dropDownList} className={styles.nav__submenu}>
      {
        items.map(item => (
          <li className={styles['nav__submenu-item']} key={item.title}>
            <Link href={item.href}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

function CategorySubMenu () {
  return createSubMenu(categories)
}

function ActivitiesSubMenu () {
  const items = [
    { title: 'Alone', href: '/categories/activities?status=alone' },
    { title: 'Not Alone', href: '/categories/activities?status=notAlone' }
  ]
  return createSubMenu(items)
}

export default function NavBar ({ home }) {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)
  const [showActivitiesMenu, setShowActivitiesMenu] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  function ByActivity () {
    return (
      <li className={styles['nav__menu-item']} onMouseLeave={() => setShowActivitiesMenu(false)}>
        <a onMouseEnter={() => setShowActivitiesMenu(true)}>
          by activity
        </a>
        <div className={styles['submenu-container']}>
          <CSSTransition
            timeout={500}
            classNames="menu-primary"
          >
            <div className={styles.menu}>
              { showActivitiesMenu && <ActivitiesSubMenu /> }
            </div>
          </CSSTransition>
        </div>
      </li>
    )
  }

  function ByCategory () {
    return (
      <li className={styles['nav__menu-item']} onMouseLeave={() => setShowCategoryMenu(false)}>
        <a onMouseEnter={() => setShowCategoryMenu(true)}>
        by category
        </a>
        <div className={styles['submenu-container']}>
          <CSSTransition
            timeout={500}
            classNames="menu-primary"
          >
            <div className={styles.menu}>
              { showCategoryMenu && <CategorySubMenu /> }
            </div>
          </CSSTransition>
        </div>
      </li>
    )
  }

  function getMobileCategories () {
    return categories.map(c => (
      <Link href={c.href} key={c.title}>
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
      <div className={styles[openMenu ? 'mobileNavBlack' : 'mobileNavWhite']} onClick={toggleOpen}>
        <div className={styles[openMenu ? 'changeBar1' : 'bar1']} />
        <div className={styles[openMenu ? 'changeBar2' : 'bar2']} />
        <div className={styles[openMenu ? 'changeBar3' : 'bar3']} />
      </div>
      {
        openMenu
          ? (
            <div className={styles.navbarMenu}>
              {mobileCategories}
              {
                home
                  ? null
                  : (
                    <Link href="/">
                      <a className={styles.menuLink}>Idea Generator</a>
                    </Link>
                  )
              }
            </div>
          )
          : null
      }
      <nav className={styles.nav}>
        <ul className={styles.nav__menu}>
          <ByCategory />
          {/* <ByActivity /> */}
          {/* <li className={styles['nav__menu-item']}>
            <Link href="/favorites">
              <a>site favorites</a>
            </Link>
          </li> */}
          {
            home
              ? null
              : (
                <li className={styles['nav__menu-item']}>
                  <Link href="/">
                    <a>idea generator</a>
                  </Link>
                </li>
              )
          }
        </ul>
      </nav>
    </div>
  )
}
