import { useState } from "react";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import styles from "./index.module.css";
import { BsBoxArrowInDown } from "react-icons/bs";
import html2canvas from "html2canvas";
import { AiOutlineFileImage } from "react-icons/ai";

import background from "./background.jpg";

const Instagram4 = () => {
  const [img, setImg] = useState(background);
  const [color, setColor] = useState("#000");

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
        id="paper"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div
          className={styles.cover}
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <p className={styles.topText} contentEditable>
            FAÇA UMA PAUSA
          </p>
          <p className={styles.middleText} contentEditable>
            RELAXE ENTRANDO EM SINTONIA COM A NATUREZA
          </p>
          <p className={styles.bottomText} contentEditable>
            @MY_USER
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.backgroundBtn}>
          <AiOutlineFileImage size={32} color={color} />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
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

export default Instagram4;
