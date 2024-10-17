// components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-white-200">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-3">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="mx-3">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </footer>
  );
}
