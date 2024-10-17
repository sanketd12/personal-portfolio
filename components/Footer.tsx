import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css'; // Adjust path as necessary

export default function Footer() {
  return (
    <footer className={`flex justify-center items-center p-4 bg-white ${styles.footer}`}>
      <div>
        <a href="https://github.com/sanketd12" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
        </a>
      </div>
      <div>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mx-3">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="black" />
        </a>
      </div>
    </footer>
  );
}
