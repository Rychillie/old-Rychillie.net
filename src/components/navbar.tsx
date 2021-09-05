import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navbar}>
        <Link href="/">
          <a className={styles.linkTitle}>
            <span>🦄 Rychillie</span>
          </a>
        </Link>
        <ul className={styles.navbarLinks}>
          {/* <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Portfólio</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contato</a>
            </Link>
          </li> */}
          <li>
            <Link href="/">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
