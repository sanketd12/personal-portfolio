// components/HeroSection.js
import Image from 'next/image'
import styles from './Hero.module.css'

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/sanketPic.jpeg"
          alt="Profile"
          width={300}
          height={300}
          className={styles.profileImage}
        />
      </div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Hi, I'm Sanket!</h1>
        <p className={styles.description}>
          I'm a <span className={styles.highlight}>Software Engineer</span> based in Los Angeles,
          CA. Working towards creating software that makes life easier and more meaningful.
        </p>
        <button className={styles.projectsButton}>Projects</button>
      </div>
    </div>
  )
}
