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
          <a href="#">Menu</a>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
