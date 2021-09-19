import { useState } from "react";
import styles from "./index.module.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { BsFillImageFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { AiFillFilePdf, AiOutlineBgColors } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Letter1 = () => {
  const [theme, setTheme] = useState("#ad0331");
  const [logo, setLogo] = useState("");
  const date = new Date();

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
      <div className={styles.paper} id="paper">
        <div className={styles.header}>
          <div
            className={styles.logo}
            style={{ backgroundImage: `url(${logo})` }}
          >
            {logo === "" && (
              <BsFillImageFill
                size={88}
                color={theme}
                style={{ position: "absolute" }}
              />
            )}
            <input
              type="file"
              onChange={(e) => setLogo(URL.createObjectURL(e.target.files[0]))}
              accept="image/png, image/jpeg"
            />
          </div>
          <p contentEditable={true} style={{ color: theme }}>
            Business name
          </p>
        </div>
        <p
          contentEditable={true}
          style={{ color: theme }}
          className={styles.date}
        >
          September 12, {date.getFullYear()}
        </p>
        {/* MAX LEN: 944 */}
        <p contentEditable={true} className={styles.letter}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). <br />{" "}
          <br />
          Lorem Ipsum, Text.
        </p>
        <div className={styles.footer}>
          <div className={styles.canvas}>
            <canvas
              style={{ backgroundColor: theme }}
              className={styles.canvas1}
            ></canvas>
            <canvas
              style={{ backgroundColor: theme }}
              className={styles.canvas2}
            ></canvas>
          </div>
          <div className={styles.infos}>
            <div>
              <FiPhone color={theme} size={24} />
              <p contentEditable={true}>99999999</p>
            </div>
            <div>
              <GoLocation color={theme} size={24} />
              <p contentEditable={true}>Address</p>
            </div>
            <div>
              <MdComputer color={theme} size={24} />
              <p contentEditable={true}>mysite.com</p>
            </div>
          </div>
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
      <Footer />
    </div>
  );
};

export default Letter1;
