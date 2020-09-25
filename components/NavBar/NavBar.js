
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

function CategorySubMenu () {
  return (
    <ul id={styles.dropDownList} className={styles.nav__submenu}>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/tv">
          <a>T.V.</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/movies">
          <a>Movies</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/music">
          <a>Music</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/music">
          <a>Podcasts</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/books">
          <a>Books</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/deals">
          <a>Deals</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/sites">
          <a>Sites</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/food">
          <a>Food</a>
        </Link>
      </li>
    </ul>
  )
}

function ActivitiesSubMenu () {
  return (
    <ul id={styles.dropDownList} className={styles.nav__submenu}>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/activities?status=alone">
          <a>Alone</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/activities?status=notAlone">
          <a>Not Alone</a>
        </Link>
      </li>
    </ul>
  )
}

export default function NavBar () {
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
            <a>site favorites</a>
          </li>
          <li className={styles['nav__menu-item']}>
            <a>random generator</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
