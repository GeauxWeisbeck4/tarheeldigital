import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <nav className={styles.navBar}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
                <Link href="/ourWork" className={styles.navLink}>Our Work</Link>
                <Link href="/services" className={styles.navLink}>Services</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
            </nav>
        </div>
    )
}