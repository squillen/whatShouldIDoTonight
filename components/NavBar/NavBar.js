
import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Link from 'next/link'
import styles from './NavBar.module.scss'
import Logo from '../logo/logo'

function MoodSubMenu () {
  return (
    <ul id={styles.dropDownList} className={styles.nav__submenu}>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/chill">
          <a>Chill</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/active">
          <a>Active</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/curious">
          <a>Curious</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/happy">
          <a>Happy</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/mad">
          <a>Mad</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/sad">
          <a>Sad</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/daring">
          <a>Daring</a>
        </Link>
      </li>
    </ul>
  )
}

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
  const items = [
    { title: 'Watch', href: '/categories/watch' },
    // { title: 'Music', href: '/categories/music' },
    { title: 'Listen', href: '/categories/listen' },
    { title: 'Read', href: '/categories/read' },
    { title: 'Learn', href: '/categories/learn' },
    // { title: 'Deals', href: '/categories/deals' },
    // { title: 'Sites', href: '/categories/sites' },
    { title: 'Eat', href: '/categories/eat' },
    { title: 'Do', href: '/categories/do' }
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
  const [showMoodMenu, setShowMoodMenu] = useState(false)
  const [showActivitiesMenu, setShowActivitiesMenu] = useState(false)

  return (
    <div className={styles.navBarContainer}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav__menu}>
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
          {/* <li className={styles['nav__menu-item']} onMouseLeave={() => setShowMoodMenu(false)}>
            <a onMouseEnter={() => setShowMoodMenu(true)}>
              by mood
            </a>
            <div className={styles['submenu-container']}>
              <CSSTransition
                timeout={500}
                classNames="menu-primary"
              >
                <div className={styles.menu}>
                  { showMoodMenu && <MoodSubMenu /> }
                </div>
              </CSSTransition>
            </div>
          </li> */}

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
                    <a>random generator</a>
                  </Link>
                </li>
              )
          }
        </ul>
      </nav>
    </div>
  )
}
