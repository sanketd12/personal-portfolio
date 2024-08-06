import styles from './about.module.css'
import Header from "../../../components/Header";
export default function About() {
  return (
    <><Header></Header>
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      
      <section className={styles.section}>
        <h2>Experience</h2>
        <ul className={styles.list}>
          <li>Software Engineering Intern at TechSur Solutions (Jun 2024-Present)</li>
          <li>Software Engineer at CargoLabs (Jun 2024-Present)</li>
          {/* Add more experiences as needed */}
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>Skills</h2>
        <ul className={styles.skillList}>
          <li className={styles.skill}>JavaScript</li>
          <li className={styles.skill}>React</li>
          <li className={styles.skill}>Node.js</li>
          <li className={styles.skill}>Python</li>
          <li className={styles.skill}>SQL</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>Education</h2>
        <p>B.S. in Computer Science, University of Virginia, Charlottesville, VA</p>
      </section>
      <section className={styles.section}>
        <h2>Links</h2>
        <p>LinkedIn</p>
        <p>GitHub</p>
        <p>Resume</p>
      </section>
    </div></>
  )
}