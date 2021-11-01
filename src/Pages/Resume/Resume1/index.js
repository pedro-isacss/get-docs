import { useState } from "react";
import styles from "./index.module.css";
import profileImgDefault from "./profile.jpg";
import { contactMe, awardsReceived, skillsFields } from "./utils";
import { AiFillFilePdf, AiOutlineBgColors } from "react-icons/ai";
import { RiBookmark3Line } from "react-icons/ri";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import NavBar from "../../../Components/NavBar";
import Footer from "../../../Components/Footer";

const Resume1 = () => {
  const [profileImg, setProfileImg] = useState(profileImgDefault);
  const [skills, setSkills] = useState(skillsFields("#fff"));
  const [canChangeSkillsStars, setCanChangeSkillsStars] = useState(true);
  const [colorTheme, setColorTheme] = useState("#002d33");
  const [activeAwards, setActiveAwards] = useState(true);
  const contactme = contactMe("#fff");
  const awards = awardsReceived("#fff");

  const handleChangeSkillsStars = (index, newStars) => {
    if (canChangeSkillsStars) {
      const newSkillsStars = [...skills];
      newSkillsStars[index].stars = newStars;
      setSkills([...newSkillsStars]);
      setCanChangeSkillsStars(false);
      setTimeout(() => {
        setCanChangeSkillsStars(true);
      }, 100);
    }
  };

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
        <div className={styles.right} style={{ backgroundColor: colorTheme }}>
          <div className={styles.profile}>
            <div
              className={styles.imgWrapper}
              style={{ backgroundImage: `url(${profileImg})` }}
            ></div>
            <input
              type="file"
              onChange={(e) =>
                setProfileImg(URL.createObjectURL(e.target.files[0]))
              }
              accept="image/png, image/jpeg"
            />
          </div>
          <div className={styles.containerTopic}>
            <span>Contact me at</span>
            {contactme.map((contact) => {
              return (
                <label key={contact.placeholder}>
                  {contact.icon}
                  <p contentEditable={true}>{contact.placeholder}</p>
                </label>
              );
            })}
          </div>
          <div className={styles.containerTopic}>
            <span>Skills summary</span>
            {skills.map((skill, index) => {
              return (
                <div className={styles.label} key={index}>
                  <button onClick={() => handleChangeSkillsStars(index, 1)}>
                    {skill.iconMarked}
                  </button>
                  <button onClick={() => handleChangeSkillsStars(index, 2)}>
                    {skill.stars >= 2 ? skill.iconMarked : skill.icon}
                  </button>
                  <button onClick={() => handleChangeSkillsStars(index, 3)}>
                    {skill.stars >= 3 ? skill.iconMarked : skill.icon}
                  </button>
                  <p contentEditable={true}>{skill.placeholder}</p>
                </div>
              );
            })}
          </div>
          {activeAwards && (
            <div className={styles.containerTopic}>
              <span>Awards received</span>
              {awards.map((award, index) => {
                return (
                  <label key={index}>
                    {award.icon}
                    <p contentEditable={true}>{award.placeholder}</p>
                  </label>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.left}>
          <p
            className={styles.name}
            style={{ color: colorTheme }}
            contentEditable={true}
          >
            Your name
          </p>
          <hr />
          <p
            className={styles.profession}
            style={{ color: colorTheme }}
            contentEditable={true}
          >
            What you do
          </p>
          <span style={{ color: colorTheme }}>Personal profile</span>
          <pre className={styles.textarea} contentEditable={true}>
            Talk about you
          </pre>
          <span style={{ color: colorTheme }}>Work experience</span>
          <pre contentEditable={true} className={styles.textarea}>
            Talk about your work experience
          </pre>
          <span style={{ color: colorTheme }}>Educational history</span>
          <pre contentEditable={true} className={styles.textarea}>
            Talk about your education
          </pre>
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => setActiveAwards(!activeAwards)}
          className={styles.activeAwardsBtn}
        >
          <RiBookmark3Line
            style={{ opacity: activeAwards ? 1 : 0.5 }}
            color={colorTheme}
            size={32}
          />
        </button>
        <button className={styles.colorBtn}>
          <input
            type="color"
            onChange={(e) => setColorTheme(e.target.value)}
            value={colorTheme}
          />
          <AiOutlineBgColors color={colorTheme} size={32} />
        </button>
        <button
          style={{ backgroundColor: colorTheme }}
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

export default Resume1;
