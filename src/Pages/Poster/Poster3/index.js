import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import { BsBoxArrowInDown } from "react-icons/bs";
import { AiOutlineFontColors, AiOutlineBgColors } from "react-icons/ai";
import html2canvas from "html2canvas";

const Poster3 = () => {
  const [textColor, setTextColor] = useState("#ef0");
  const [color, setColor] = useState("#189565");

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
        <p contentEditable className={styles.call}>
          My Great event
        </p>
        <p
          contentEditable
          className={styles.title}
          style={{ color: textColor }}
        >
          Any nice phrase here
        </p>
        <p contentEditable className={styles.description}>
          The best of music 2021
        </p>
        <div>
          <hr style={{ backgroundColor: textColor }} />
          <p contentEditable className={styles.date}>
            October 15, 2021 | 17h
          </p>
          <p contentEditable className={styles.place}>
            Best place of the world
          </p>
          <hr style={{ backgroundColor: textColor }} />
        </div>
        <canvas style={{ backgroundColor: color }}></canvas>
      </div>
      <div className={styles.buttons}>
        <button className={styles.textColorBtn}>
          <AiOutlineFontColors size={32} color={color} />
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </button>
        <button className={styles.colorBtn}>
          <AiOutlineBgColors size={32} color={color} />
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </button>
        <button
          className={styles.downloadBtn}
          style={{ backgroundColor: color }}
          onClick={() => handleDownload()}
        >
          <BsBoxArrowInDown size={40} color="#fff" />
        </button>
        <a
          id="downloadRef"
          href="#img"
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

export default Poster3;
