import styles from "./index.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/" className={styles.logo}>
          <img src="/icons/logo.svg" alt="Get Docs" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <a
            href="https://github.com/pedro-isacss/get-docs"
            target="_blank"
            rel="noreferrer"
          >
            Collaborate
          </a>
          <a
            href="https://www.buymeacoffee.com/ss.pedroisac/"
            target="_blank"
            rel="noreferrer"
          >
            Support
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
