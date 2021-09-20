import styles from "../../styles/components/Footer/Footer.module.scss";

const Social = (): JSX.Element => {
  return (
    <ul className={styles.socialList}>
      <li>
        <a href="https://twitter.com/rychillie">Twitter</a>
      </li>
      <li>
        <a href="https://instagram.com/rychillie">Instagram</a>
      </li>
      <li>
        <a href="https://github.com/rychillie">Github</a>
      </li>
      <li>
        <a href="https://linkedin.com/in/rychillie">Linkedin</a>
      </li>
      <li>
        <a href="https://dribbble.com/rychillie">Dribbble</a>
      </li>
    </ul>
  );
};

export default Social;
