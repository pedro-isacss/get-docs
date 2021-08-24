import styles from "./index.module.css";
import logo from "../../images/logo.svg";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={styles.logo}>
        <img src={logo} alt="Get Docs" />
      </a>
      <nav>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
      </nav>
    </div>
  );
};

export default NavBar;
