import style from "./About.module.css";
import { FaDatabase, FaServer, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <div className={style.about_container} id="about">
      <p className={style.about_me}>
        Driven by curiosity and a passion for technology, I specialize in the
        intersection of Data science and backend development.
      </p>

      <div className={style.content_about}>
        <div className={style.about_text}>
          <p className={style.text}>
            As an Information Systems student, I have gained a strong foundation
            in designing and developing modern web applications. Working across
            both frontend and backend, I understand how different parts of a
            system interact and communicate.
          </p>
          <p className={style.text}>
            I am especially interested in backend development, focusing on
            application logic, data management, and system efficiency. I also
            have experience building frontend interfaces that enhance user
            experience.
          </p>
          <p className={style.text}>
            I aim to build scalable, maintainable, and efficient solutions for
            real-world problems.
          </p>
        </div>

        <div className={style.cadre}>
          <div className={style.bloc}>
            <FaDatabase className={style.icon} />
            <div className={style.cadre_petit}>
              <p className={style.titre_contenu}> Information System </p>
              <p className={style.text_contenu}> Manipulating data </p>
            </div>
          </div>

          <div className={style.bloc}>
            <FaReact className={style.icon} />
            <div className={style.cadre_petit}>
              <p className={style.titre_contenu}> Backend development</p>
              <p className={style.text_contenu}>
                Building scalable APIs and distributed systems
              </p>
            </div>
          </div>

          <div className={style.bloc}>
            <FaServer className={style.icon} />
            <div className={style.cadre_petit}>
              <p className={style.titre_contenu}> Frontend development </p>
              <p className={style.text_contenu}>
                Building scalable APIs and distributed systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
