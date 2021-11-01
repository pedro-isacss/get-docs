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
          <span>Links</span>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div>
          <span>Links</span>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
        <div>Another content</div>
      </footer>
    </div>
  );
};

export default Footer;
