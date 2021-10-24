import styles from "../../styles/components/Footer/Footer.module.scss";

const Social = (): JSX.Element => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a
          href="https://twitter.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>
        <a
          href="https://github.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </li>
      <li>
        <a
          href="https://dribbble.com/rychillie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
      </li>
    </ul>
  );
};

export default Social;
