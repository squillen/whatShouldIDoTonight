
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
        <Link href="/moods/chill">
          <a>Active</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/chill">
          <a>Curious</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/chill">
          <a>Happy</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/chill">
          <a>Mad</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/chill">
          <a>Sad</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/moods/chill">
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
        <Link href="/categories/chill">
          <a>T.V.</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/chill">
          <a>Movies</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/chill">
          <a>Music</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/chill">
          <a>Books</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/chill">
          <a>Deals</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/chill">
          <a>Sites</a>
        </Link>
      </li>
      <li className={styles['nav__submenu-item']}>
        <Link href="/categories/chill">
          <a>Food</a>
        </Link>
      </li>
    </ul>
  )
}

export default function NavBar () {
  const [activeMenu, setActiveMenu] = useState('category')
  const [showCategoryMenu, setShowCategoryMenu] = useState(false)
  const [showMoodMenu, setShowMoodMenu] = useState(false)
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const currentRef = dropdownRef.current || {}
    const firstChild = currentRef.firstChild || {}
    setMenuHeight(firstChild.offsetHeight)
  }, [])

  function calcHeight (el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

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
          <li className={styles['nav__menu-item']} onMouseLeave={() => setShowMoodMenu(false)}>
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
          </li>
          <li className={styles['nav__menu-item']}>
            <a>random generator</a>
          </li>
          <li className={styles['nav__menu-item']}>
            <a>site favorites</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
