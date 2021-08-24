import styles from "./index.module.css";
import bannerImg from "../../images/logo-white.svg";
import NavBar from "../../Components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.banner}>
        <div>
          <h1>Create documents quickly</h1>
          <p>Various document templates at your disposal</p>
          <a href="#">Choose a template</a>
        </div>
        <img src={bannerImg} alt="templates examples" />
      </section>
    </div>
  );
};

export default Home;
