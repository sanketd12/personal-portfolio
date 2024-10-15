import styles from "./contact.module.css"


export default function Contact() {
    return (
      <section id = "contact">
      <div className={styles.container}>
        <h1 className ={styles.title}>Contact Me</h1>
        <ul className={styles.list}>
          <li>Feel free to contact me at sanketpd12@gmail.com!</li>
        </ul>
      </div>
      </section>
    );

}