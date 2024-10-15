import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Sanket Doddabendigere
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="#about">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/public/ResumeSanketDoddabendigere.pdf">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;