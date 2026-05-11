import styles from "./Hero.module.css";
import me from "/src/assets/moi1.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const reseau = [
  {
    icon: <FaGithub />,
    label: "github",
    link: "https://github.com/Emiliahrabeson",
  },
  // { icon: <FaLinkedin />, label: "Linkedin", link: "#" },
];

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.hero_me}>
          <div className={styles.hero_image}>
            <img src={me} alt="me" />
          </div>
        </div>

        <h1 className={styles.titre}>
          FullStack <span className={styles.accent}>Developper</span>
        </h1>

        <p className={styles.hero_desc}>
          I am a full-stack developer with experience in both frontend and
          backend development. I have a strong interest in backend engineering,
          focusing on system design, performance, and scalability.
        </p>

        <div className={styles.hero_btns}>
          <a href="#contact" className={styles.btn_outline}>
            Get In Touch
          </a>
          <a href="#project" className={styles.btn_fill}>
            View my work
          </a>
        </div>

        <div className={styles.hero_techs}>
          {reseau.map((t) => (
            <span
              key={t.label}
              className={styles.hero_tech_item}
              title={t.label}
            >
              <a href={t.link} className={styles.links}>
                {t.icon}
              </a>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
