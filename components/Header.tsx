"use client";
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          Sanket Doddabendigere
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className={`${styles.mobileMenuButton} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileNav + ' ' + styles.open : styles.desktopNav}`}>
        <ul>
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/Sanket_Resume__Fall_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;