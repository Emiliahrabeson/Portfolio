import styles from "./Projects.module.css";
import projet1 from "/src/assets/projet1.png";
import projet2 from "/src/assets/projet2.png";
import e_commerce from "/src/assets/e_commerce.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className={styles.project} id="project">
      <p className={styles.grand_titre}>Projects</p>
      <p className={styles.text}>Some of my project ...</p>
      {/* netflix */}
      <div className={styles.project_cadre}>
        <img src={projet1} alt="projet1" />
        <div className={styles.project_description}>
          <p className={styles.titre}>Netflix Clone</p>
          <p className={styles.explication}>
            Clone of netflix with authentification,verification by email,list of
            movies,watching movies
          </p>
          <ul className={styles.tech}>
            <li>React</li>
            <li>Express.js</li>
            <li>Css</li>
            <li>MySQL</li>
            <li>JWT</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/Emiliahrabeson/Netflix_clone"
                className={styles.tech}
              >
                <FaGithub className={styles.contact_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.project_cadre}>
        <img src={projet2} alt="projet2" />
        <div className={styles.project_description}>
          <p className={styles.titre}>Voip Web</p>
          <p className={styles.explication}>
            Application de messagerie instantanée et d'appels vocaux en temps
            réel utilisant WebRTC et Socket.IO.
          </p>
          <ul className={styles.tech}>
            <li>React</li>
            <li>Express.js</li>
            <li>Css</li>
            <li>MySQL</li>
            <li>JWT</li>
            <li>Socket.IO</li>
            <li>WebRTC</li>
            <li>Node.js</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/Emiliahrabeson/Voip_web"
                className={styles.tech}
              >
                <FaGithub className={styles.contact_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ecommerce */}
      <div className={styles.project_cadre}>
        <img src={e_commerce} alt="projet2" />
        <div className={styles.project_description}>
          <p className={styles.titre}>e-commerce</p>
          <p className={styles.explication}>
            Visualisation of an e-commerce data,where you can search for
            products,view statistics,view details about it
          </p>
          <ul className={styles.tech}>
            <li>React</li>
            <li>Express.js</li>
            <li>Tailwind css</li>
            <li>MySQL</li>
          </ul>
          <ul>
            <li>
              <a
                href="https://github.com/Emiliahrabeson/Ecommerce"
                className={styles.tech}
              >
                <a href="https://github.com/Emiliahrabeson/Ecommerce">
                  <FaGithub className={styles.contact_icon} />
                </a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
