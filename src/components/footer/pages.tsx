import { AnimateSharedLayout } from "framer-motion";
import styles from "../../styles/components/Footer/Footer.module.scss";
import Link from "../NoScrollLink";
import React, { ReactNode } from "react";

const links: { name: string; href: string }[] = [
  {
    name: "Publicações",
    href: "/blog",
  },
  {
    name: "Artigos",
    href: "/em-construcao",
  },
  {
    name: "Portfólio",
    href: "/em-construcao",
  },
  {
    name: "Promoções",
    href: "/em-construcao",
  },
  {
    name: "Links",
    href: "/em-construcao",
  },
  {
    name: "Sobre",
    href: "/about",
  },
  {
    name: "Uses",
    href: "/uses",
  },
];

const Pages = (): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <ul className={styles.pagesList}>
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </AnimateSharedLayout>
  );
};

export default Pages;
