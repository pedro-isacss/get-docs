import styles from "./index.module.css";
import { Link } from "react-router-dom";

const Footer = ({ logoSrc }) => {
  const date = new Date();
  return (
    <div className={styles.container}>
      <footer>
        <div>
          <img src={logoSrc} alt="Get Docs" />
          <p>
            Get Docs is an{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pedro-isacss/get-docs"
            >
              Open Source
            </a>{" "}
            project and has an{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pedro-isacss/get-docs/blob/master/LICENSE"
            >
              MIT
            </a>{" "}
            license.
          </p>
          <p>&copy; Get Docs - {date.getFullYear()}</p>
        </div>
        <div>
          <span>Important</span>
          <a
            href="https://www.buymeacoffee.com/ss.pedroisac/"
            target="_blank"
            rel="noreferrer"
          >
            Support
          </a>
          <a
            href="https://github.com/pedro-isacss/get-docs"
            target="_blank"
            rel="noreferrer"
          >
            Collaborate
          </a>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <span>Author</span>
          <a href="https://github.com/pedro-isacss" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-isacss/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ss.pedroisac@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            E-mail
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
