import { useState, useEffect } from "react";
import styles from "./index.module.css";
import NavBar from "../../Components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((res) => {
        setData([...res]);
        console.log(res);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <section className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div>
            <h1>Create documents quickly</h1>
            <p>Various document templates at your disposal</p>
            <a href="#">Choose a template</a>
          </div>
          <img src="/icons/logo-white.svg" alt="templates examples" />
        </div>
      </section>
      <section className={styles.templates}>
        {data.map((template) => (
          <Link to={template.link}>
            <img src={template.image} alt={template.name} />
          </Link>
        ))}
        <a href="#">
          <img src="./images/resume-1.jpg" />
        </a>
        <a href="#">
          <img src="./images/resume-1.jpg" />
        </a>
        <a href="#">
          <img src="./images/resume-1.jpg" />
        </a>
        <a href="#">
          <img src="./images/instagram-1.jpg" />
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
