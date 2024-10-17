// components/Hero.js
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageSection}>
        <Image
          src="/sanketPic.jpeg"
          alt="Profile"
          layout="fill"
          objectFit="cover"
          className={styles.profileImage}
        />
      </div>
      <div className={styles.contentSection}>
        <h1 className={styles.title}>Hi, I&apos;m Sanket!</h1>
        <p className={styles.description}>
          Third-year student at the University of Virginia studying <span className={styles.highlight}>Computer Science</span> with a Minor in <span className={styles.highlight}>Data Science</span>.
        </p>
      </div>
    </div>
  )
}