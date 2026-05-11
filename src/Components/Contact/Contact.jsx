import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <h2 className={styles.contact_title}>Contact</h2>
      <p className={styles.contact_sub}>...</p>

      <div className={styles.contact_links}>
        <a
          href="mailto:emiliahrabeson@gmail.com"
          className={styles.contact_item}
        >
          <FaEnvelope className={styles.contact_icon} />
          <span>emiliahrabeson@gmail.com</span>
        </a>

        <a
          href="https://github.com/Emiliahrabeson"
          className={styles.contact_item}
        >
          <FaGithub className={styles.contact_icon} />
          <span>github.com/Emiliahrabeson</span>
        </a>

        <a href="https://linkedin.com/..." className={styles.contact_item}>
          <FaLinkedin className={styles.contact_icon} />
          <span>linkedin.com/in/emi</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
