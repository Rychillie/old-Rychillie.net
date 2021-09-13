import styles from "../../styles/components/Footer/Footer.module.scss";

const Social = (): JSX.Element => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a href="#">Twitter</a>
      </li>
      <li>
        <a href="#">Instagram</a>
      </li>
      <li>
        <a href="#">Github</a>
      </li>
      <li>
        <a href="#">Linkedin</a>
      </li>
      <li>
        <a href="#">Dribbble</a>
      </li>
    </ul>
  );
};

export default Social;
