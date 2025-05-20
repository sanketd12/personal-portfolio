"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <motion.div
        className={styles.imageSection}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/sanketPic.jpeg"
            alt="Profile"
            width={300}
            height={300}
            className={styles.profileImage}
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.contentSection}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Hi, I&apos;m Sanket!
        </motion.h1>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Third-year student at the University of Virginia studying{' '}
          <motion.span
            className={styles.highlight}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Computer Science
          </motion.span>{' '}
          with a Minor in{' '}
          <motion.span
            className={styles.highlight}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Data Science
          </motion.span>
        </motion.p>
        <motion.div
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="/projects"
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          

          
          <motion.a
            href="/contact"
            className={styles.secondaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          <motion.a
            href="/Sanket_Resume__Fall_.pdf" target="_blank" rel="noopener noreferrer"
            className={styles.primaryButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
          
        </motion.div>
      </motion.div>
    </div>
  );
}