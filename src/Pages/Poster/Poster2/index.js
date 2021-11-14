import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import { BsBoxArrowInDown } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
import html2canvas from "html2canvas";
import earphone from "./earphone.png";

const Poster2 = () => {
  const [theme, setTheme] = useState("#cc1929");
  const [theme2, setTheme2] = useState("#ec3448");
  const [img, setImg] = useState(earphone);

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
        style={{ backgroundColor: theme }}
        id="paper"
      >
        <div>
          <p contentEditable className={styles.promotion}>
            Super promotion
          </p>
          <p contentEditable className={styles.code}>
            2E94K
          </p>
        </div>
        <div className={styles.imgContainer}>
          <input
            type="file"
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
          />
          <img src={img} alt="earphone" />
        </div>
        <p contentEditable className={styles.info}>
          Use the coupon above and get 50% off your new earphone.
        </p>
        <div
          className={styles.canvas}
          style={{
            background: `linear-gradient(to right top,${theme2}, ${theme})`,
          }}
        ></div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.colorBtn}>
          <input
            type="color"
            onChange={(e) => {
              setTheme(e.target.value);
            }}
            value={theme}
            title="Theme"
          />
          <AiOutlineBgColors color={theme} size={32} />
        </button>
        <button className={styles.colorBtn}>
          <input
            type="color"
            onChange={(e) => {
              setTheme2(e.target.value);
            }}
            value={theme}
            title="Theme 2"
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

export default Poster2;
