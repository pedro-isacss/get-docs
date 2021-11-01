import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import { BsBoxArrowInDown } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
import html2canvas from "html2canvas";

const Poster1 = () => {
  const [theme, setTheme] = useState("#cf3654");

  const handleDownload = () => {
    const paper = document.getElementById("paper");
    html2canvas(paper).then((canvas) => {
      const imgData = canvas.toDataURL("image/PNG");
      const download = document.getElementById("downloadRef");
      download.href = imgData;
      download.click();
    });
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.paper} id="paper">
        <canvas style={{ backgroundColor: theme }}></canvas>
        <div className={styles.header}>
          <p contentEditable={true}>Circus 123 presents</p>
          <p contentEditable={true} style={{ color: theme }}>
            Children's Day Show 2021
          </p>
          <p contentEditable={true}>Come enjoy with your family</p>
        </div>
        <div className={styles.footer}>
          <p contentEditable={true}>25/10/21 | 9PM | Mall</p>
          <p style={{ color: theme }} contentEditable>
            www.circus.com
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.colorBtn}>
          <input
            type="color"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          />
          <AiOutlineBgColors color={theme} size={32} />
        </button>
        <button
          style={{ backgroundColor: theme }}
          onClick={() => handleDownload()}
          className={styles.downloadBtn}
        >
          <BsBoxArrowInDown color="#fff" size={40} />
        </button>
        <a
          id="downloadRef"
          href="/"
          download="poster.png"
          style={{ display: "none" }}
        >
          Download
        </a>
      </div>
      <Footer logoSrc="../icons/logo-white.svg" />
    </div>
  );
};

export default Poster1;
