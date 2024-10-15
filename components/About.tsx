import styles from './about.module.css'
export default function About() {
  return (
    <section id= "about">
    <div className={styles.container}>
      <div className={styles.contentWrapper}></div>
      <h1 className={styles.title}>About Me</h1>
      
      <section className={styles.section}>
        <h2>Experience</h2>
        <ul className={styles.list}>
          <li>Software Engineering Intern at TechSur Solutions (Jun 2024 - Aug 2024)</li>
          <li>Software Engineer at CargoLabs (Jun 2024 - Aug 2024)</li>
          <li>IT Assistant at Niyam IT (Feb 2024 - Present)</li>
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

        </ul>
      </section>
      
      <section className={styles.section}>
        <h2>Education</h2>
        <ul className={styles.list}>
          <li>B.S in Computer Science | University of Virginia | Charlottesville, VA | Exp. Graduation: May 2026</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Links</h2>
        <ul className={styles.skillList}>
          <li className={styles.link}>LinkedIn</li>
          <li className={styles.link}>GitHub</li>
          <li className={styles.link}>Resume</li>
        </ul>
      </section>
    </div>
    </section>
  )
}