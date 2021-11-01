import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import { FcImageFile } from "react-icons/fc";
import { AiOutlineFontColors, AiOutlineBgColors } from "react-icons/ai";
import { BsBoxArrowInDown } from "react-icons/bs";
import html2canvas from "html2canvas";

const Instagram1 = () => {
  const [img, setImg] = useState(null);
  const [color, setColor] = useState("#f57242");
  const [textColor, setTextColor] = useState("#444");

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
        <div
          className={styles.imgWrapper}
          style={{ backgroundImage: `url(${img})` }}
        >
          <input
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            type="file"
            accept="image/png, image/jpeg"
          />
          {!img && <FcImageFile size={188} color="#fff" />}
          <p
            style={{ color: textColor }}
            className={styles.text1}
            contentEditable={true}
          >
            Write something here
          </p>
          <p
            style={{ color: textColor }}
            className={styles.text2}
            contentEditable={true}
          >
            Write something here
          </p>
          <p
            style={{ color: textColor }}
            className={styles.text3}
            contentEditable={true}
          >
            Write something here
          </p>
          <p
            style={{ color: textColor }}
            className={styles.text4}
            contentEditable={true}
          >
            Write something here
          </p>
        </div>
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

export default Instagram1;
