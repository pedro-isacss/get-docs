import { useState } from "react";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import styles from "./index.module.css";
import { BsBoxArrowInDown } from "react-icons/bs";
import html2canvas from "html2canvas";
import { AiOutlineFontColors, AiOutlineBgColors } from "react-icons/ai";

const Instagram4 = () => {
  const [img, setImg] = useState(`${window.origin}/images/instagram4-defaultbg.webp`);
  const [color, setColor] = useState("#212121");
  const [textColor, setTextColor] = useState("#eeeeee");
  const [bgOpacity, setBgOpacity] = useState(80);

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
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
        id="paper"
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: `${color}${bgOpacity}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              color: textColor,
              fontFamily: 'Praise',
              fontSize:  "45.3333px",
            }}
            contentEditable
          >FAÇA UMA PAUSA</p>
          <p
            style={{
              color: textColor,
              fontSize:  "113.333px",
              marginBottom: "200px",
              marginTop: "200px"
            }}
            contentEditable
          >CURTA O AR LIVRE</p>
          <p
            style={{
              color: textColor,
              fontSize:  "26.6667px"
            }}
            contentEditable
          >RELAXE E SE RENOVE ENTRANDO EM SINTONIA COM A NATUREZA.</p>
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

export default Instagram4;
