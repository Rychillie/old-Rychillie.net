import React from "react";
import Image from "next/image";
import { AnimateSharedLayout } from "framer-motion";
import styles from "../styles/components/NavBar.module.scss";
import Link from "./NoScrollLink";

const links: { name: string; href: string }[] = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
];

const NavBar = () => {
  return (
    <AnimateSharedLayout>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <Link href="/">
              <a className={styles.linkTitle}>
                <span>🦄 Rychillie</span>
              </a>
            </Link>

            <Navigation />
          </div>
        </div>
      </nav>
    </AnimateSharedLayout>
  );
};

const Navigation = (): JSX.Element => {
  return (
    <>
      <ul className={styles.navbarLinks}>
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
