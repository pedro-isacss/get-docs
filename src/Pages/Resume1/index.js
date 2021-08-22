import { useState } from "react";
import styles from "./index.module.css";
import profileImgDefault from "../../images/profile.jpg";
import { contactMe, awardsReceived, skillsFields } from "./utils";
import { AiFillFilePdf } from "react-icons/ai";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume1 = () => {
  const [profileImg, setProfileImg] = useState(profileImgDefault);
  const [skills, setSkills] = useState(skillsFields("#fff"));
  const [canChangeSkillsStars, setCanChangeSkillsStars] = useState(true);
  const [colorTheme, setColorTheme] = useState("#4287f5");
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
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 24, 24);
      pdf.output("dataurlnewwindow");
    });
  };

  return (
    <div className={styles.container}>
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
                  <input placeholder={contact.placeholder} />
                </label>
              );
            })}
          </div>
          <div className={styles.containerTopic}>
            <span>Skills summary</span>
            {skills.map((skill, index) => {
              return (
                <label key={index}>
                  <button onClick={() => handleChangeSkillsStars(index, 1)}>
                    {skill.iconMarked}
                  </button>
                  <button onClick={() => handleChangeSkillsStars(index, 2)}>
                    {skill.stars >= 2 ? skill.iconMarked : skill.icon}
                  </button>
                  <button onClick={() => handleChangeSkillsStars(index, 3)}>
                    {skill.stars >= 3 ? skill.iconMarked : skill.icon}
                  </button>
                  <input placeholder={skill.placeholder} />
                </label>
              );
            })}
          </div>
          <div className={styles.containerTopic}>
            <span>Awards received</span>
            {awards.map((award, index) => {
              return (
                <label key={index}>
                  {award.icon}
                  <input placeholder={award.placeholder} />
                </label>
              );
            })}
          </div>
        </div>
        <div className={styles.left}>
          <input
            className={styles.name}
            placeholder="Your Name"
            style={{ color: colorTheme }}
          />
          <hr />
          <input
            className={styles.profession}
            style={{ color: colorTheme }}
            placeholder="What you do"
          />
          <span style={{ color: colorTheme }}>Personal profile</span>
          <textarea
            wrap="soft"
            rows={8}
            className={styles.textarea}
            placeholder="Talk about you"
          />
          <span style={{ color: colorTheme }}>Work experience</span>
          <textarea
            wrap="soft"
            rows={8}
            className={styles.textarea}
            placeholder="Talk about your work experience"
          />
          <span style={{ color: colorTheme }}>Educational history</span>
          <textarea
            wrap="soft"
            rows={8}
            className={styles.textarea}
            placeholder="Talk about your education"
          />
        </div>
      </div>
      <button
        onClick={() => handleDownloadAsPDF()}
        className={styles.downloadBtn}
      >
        <AiFillFilePdf color="#fff" size={56} />
      </button>
    </div>
  );
};

export default Resume1;
