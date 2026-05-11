import styles from "./Projects.module.css";
import projet1 from "/src/assets/projet1.png";
import e_commerce from "/src/assets/e_commerce.png";

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
        </div>
      </div>
    </div>
  );
};

export default Projects;
