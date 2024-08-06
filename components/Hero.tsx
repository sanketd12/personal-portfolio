// components/HeroSection.js
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/sanketPic.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
        <h1 className={styles.title}>Hi, I&apos;m Sanket!</h1>
        <p className={styles.description}>
        I&apos;m a third-year student at the University of Virginia studying <span className={styles.highlight}> Computer Science </span> with a Minor in <span className={styles.highlight}>Data Science</span>.
        </p>
      </div>
    </div>
  )
}