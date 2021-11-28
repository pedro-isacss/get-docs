import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";
import { BsFillImageFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { AiFillFilePdf, AiOutlineBgColors } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Letter2 = () => {
  const [theme, setTheme] = useState("#00818a");

  const handleDownloadAsPDF = () => {
    const paper = document.getElementById("paper");
    html2canvas(paper).then((canvas) => {
      const imgData = canvas.toDataURL("image/JPEG");
      const pdf = new jsPDF("p", "px", [345, 491]);
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output("dataurlnewwindow");
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div
        className={styles.paper}
        id="paper"
        style={{ backgroundColor: theme }}
      >
        <div className={styles.content}>
          <p contentEditable className={styles.title} style={{ color: theme }}>
            What is Lorem Ipsum?
          </p>
          <p contentEditable className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p contentEditable className={styles.signature}>
            Lorem Ipsum - November 28, 2021
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
          onClick={() => handleDownloadAsPDF()}
          className={styles.downloadBtn}
        >
          <AiFillFilePdf color="#fff" size={40} />
        </button>
      </div>
      <Footer logoSrc="../icons/logo-white.svg" />
    </div>
  );
};

export default Letter2;
