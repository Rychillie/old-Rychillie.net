import Link from "next/link";
import styles from "../../styles/components/Footer/Footer.module.scss";

const Pages = (): JSX.Element => {
  return (
    <ul className={styles.pagesList}>
      <li>
        <Link href="/">
          <a>Publicações</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Artigos</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Portfólio</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Promoções</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Apoiadores</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Links</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Sobre</a>
        </Link>
      </li>
      <li>
        <Link href="/uses">
          <a>Uses</a>
        </Link>
      </li>
    </ul>
  );
};

export default Pages;
