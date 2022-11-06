import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <Link href='/'>
          SPOLTO
        </Link>    
      </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/">ADD YOUR LISTING</Link>
          </li>
          <li>
            <Link href="/">DISCOVER</Link>
          </li>
          <li>
            <Link href="/">BLOG</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav