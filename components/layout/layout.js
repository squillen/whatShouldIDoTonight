import DefaultHead from '../defaultHead'
import Logo from '../logo/logo'
import styles from './layout.module.css'

export default function Layout ({ children }) {
  return (
    <div className={styles.container}>
      <DefaultHead />
      <Logo />
      <main>{children}</main>
    </div>
  )
}
