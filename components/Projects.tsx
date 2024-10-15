import styles from "./projects.module.css"


export default function Projects() {
    return (
      <section id = "projects">
      <div className={styles.container}>
        <h1 className ={styles.title}>Personal Projects</h1>
        <ul className={styles.list}>
          <li>Reel Recommender - Movie Recommendation System - A smart movie recommendation platform powered by content-based filtering. Supports 10,000+ movies and personalized search results.</li>
          <li>Stock Market Bot - A predictive stock market analysis tool that leverages natural language processing and machine learning to analyze live market data and news headlines for real-time predictions.</li>
        </ul>
      </div>
      </section>
    );

}