import Link from "next/link";
import styles from "../../styles/components/Footer/Footer.module.scss";
import Pages from "./pages";
import Social from "./social";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.menuFooter}>
        <Pages />
        <Social />
      </div>
      <p className={styles.aboutFooter}>Feito com ❤️, Typescript e SCSS</p>
    </footer>
  );
};

export default Footer;
