import styles from "./Skills.module.css";
import {
  SiApache,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiExpress,
  SiReact,
  SiC,
  SiCplusplus,
  SiMysql,
  SiGnubash,
  SiN8N,
} from "react-icons/si";
import { FaPhp, FaJava, FaLinux } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

const SKILLS = [
  { icon: <SiC />, label: "language C" },
  { icon: <SiCplusplus />, label: "C++" },
  { icon: <FaPhp />, label: "PHP" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiGnubash />, label: "Bash/Shell" },

  { icon: <SiReact />, label: "React" },
  { icon: <SiJavascript />, label: "Javascript" },
  { icon: <SiHtml5 />, label: "HTML5" },
  { icon: <SiNodedotjs />, label: "Nodejs" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <TbBrandReactNative />, label: "React Native" },

  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiApache />, label: "Apache" },
  { icon: <SiN8N />, label: "N8N" },

  { icon: <FaLinux />, label: "Linux" },
];

const Skills = () => {
  return (
    <div className={styles.skills} id="Skills">
      <p className={styles.grand_titre}>Technical Skills</p>
      <p className={styles.skill_text}>
        Here are the technologies and tools I use for full-stack development,
        with a strong focus on backend engineering.
      </p>

      <div className={styles.ensemble_cadre}>
        {SKILLS.map((s) => (
          <span key={s.label} className={styles.skill_item} title={s.label}>
            {s.icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
