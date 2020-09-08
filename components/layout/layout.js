import DefaultHead from '../defaultHead'
import Logo from '../logo/logo'
import styles from './layout.module.css'

export default function Layout ({ children }) {
  return (
    <div className={styles.container}>
      <DefaultHead />
      <header className={styles.header}>
        <Logo />
      </header>
      <main>{children}</main>
    </div>
  )
}
