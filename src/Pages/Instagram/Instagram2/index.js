import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import { AiOutlineFontColors, AiOutlineBgColors } from "react-icons/ai";
import { BsBoxArrowInDown } from "react-icons/bs";
import html2canvas from "html2canvas";

const Instagram2 = () => {
  const [img, setImg] = useState(null);
  const [color, setColor] = useState("#a4a7f9");
  const [textColor, setTextColor] = useState("#000");

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
      <div
        className={styles.paper}
        style={{ backgroundColor: color }}
        id="paper"
      >
        <div className={styles.messageContainer}>
          <p contentEditable className={styles.title}>
            Remember
          </p>
          <p contentEditable className={styles.description}>
            Imagine a new story for your life and believe in it.
          </p>
          <p contentEditable className={styles.button}>
            OK
          </p>
        </div>
        <p
          className={styles.myuser}
          contentEditable
          style={{ color: textColor }}
        >
          @my_user
        </p>
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
          href={img}
          download="instagram.png"
          style={{ display: "none" }}
        >
          Download
        </a>
      </div>
      <Footer logoSrc="../icons/logo-white.svg" />
    </div>
  );
};

export default Instagram2;
