import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from '../logo/logo'

function createSubMenu (items) {
  return (
    <ul id={styles.dropDownList} className={styles.nav__submenu}>
      {
        items.map(item => (
          <li className={styles['nav__submenu-item']} key={item.title}>
            <Link href={`${process.env.SITE_URI || 'http://localhost:3000'}${item.href}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

function CategorySubMenu () {
  const items = [
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
  return createSubMenu(items)
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

  return (
    <div className={styles.navBarContainer}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav__menu}>
          <ByCategory />
          {/* <ByActivity /> */}
          <li className={styles['nav__menu-item']}>
            <Link href="/favorites">
              <a>site favorites</a>
            </Link>
          </li>
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
