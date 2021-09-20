import Link from "next/link";
import styles from "../../styles/components/Footer/Footer.module.scss";
import Pages from "./pages";
import SocialList from "../socialList";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.contentFooter}>
        <div className={styles.apresentation}>
          <h3>🦄 Rychillie</h3>
          <SocialList />
        </div>
        <div className={styles.menuFooter}>
          <Pages />
        </div>
      </div>
      <p className={styles.aboutFooter}>
        Feito por eu mesmo, foda-se eu sou bom!
      </p>
    </footer>
  );
};

export default Footer;
