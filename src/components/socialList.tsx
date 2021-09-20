/* eslint-disable @next/next/no-img-element */
import styles from "../styles/components/SocialList.module.scss";

const SocialList = () => {
  return (
    <ul className={styles.socialMedia}>
      <li>
        <a
          href="https://twitter.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
        <span className={styles.socialName}>Twitter</span>
      </li>
      <li>
        <a
          href="https://instagram.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <span className={styles.socialName}>Instagram</span>
      </li>
      <li>
        <a
          href="https://github.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/github.svg" alt="Github" />
        </a>
        <span className={styles.socialName}>Github</span>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <span className={styles.socialName}>Linkedin</span>
      </li>
      <li>
        <a
          href="http://dribbble.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/dribbble.svg" alt="Dribbble" />
        </a>
        <span className={styles.socialName}>Dribbble</span>
      </li>
    </ul>
  );
};

export default SocialList;
