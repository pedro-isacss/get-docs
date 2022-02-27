import { useState, useEffect } from "react";
import styles from "./index.module.css";
import NavBar from "../../Components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("all");

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((res) => {
        setData([...res]);
        let newTypes = [];
        res.map((res) => {
          if (newTypes.indexOf(res.type) === -1) {
            newTypes.push(res.type);
          }
        });
        setTypes([...newTypes]);
      });
  }, []);

  const Templates = () => {
    if (currentType === "all") {
      return (
        <>
          {data.map((template) => (
            <Link to={template.link}>
              <img src={template.image} alt={template.name} />
            </Link>
          ))}
        </>
      );
    }

    return (
      <>
        {data
          .filter((template) => template.type === currentType)
          .map((template) => (
            <Link to={template.link}>
              <img src={template.image} alt={template.name} />
            </Link>
          ))}
      </>
    );
  };

  return (
    <div>
      <NavBar />
      <section className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div>
            <h1>Create documents quickly</h1>
            <p>
              It is an opensource website that provides quick creation of
              documents
            </p>
            <a href="#templates">Choose a template</a>
          </div>
          <img src="/get-docs/icons/docs.png" alt="templates examples" />
        </div>
      </section>
      <section id="templates" className={styles.templatesContainer}>
        <h2>Templates</h2>
        <div className={styles.types}>
          <button
            onClick={() => setCurrentType("all")}
            style={
              "all" === currentType
                ? {
                  backgroundColor: "var(--theme)",
                  color: "var(--white)",
                }
                : null
            }
          >
            All
          </button>
          {types.map((type) => {
            return (
              <button
                onClick={() => setCurrentType(type)}
                style={
                  currentType === type
                    ? {
                      backgroundColor: "var(--theme)",
                      color: "var(--white)",
                    }
                    : null
                }
              >
                {type}
              </button>
            );
          })}
        </div>
        <div className={styles.templates}>{Templates()}</div>
      </section>
      <Footer logoSrc="./icons/logo-white.svg" />
    </div>
  );
};

export default Home;
