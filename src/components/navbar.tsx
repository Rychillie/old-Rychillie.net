import Image from "next/image";
import { AnimateSharedLayout } from "framer-motion";
import styles from "../styles/components/NavBar.module.scss";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface IProps extends LinkProps {
  children: ReactNode;
}

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

const NavLink = ({ children, href, passHref }: IProps): JSX.Element => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

const NavBar = () => {
  return (
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
  );
};

const Navigation = (): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <ul className={styles.navbarLinks}>
        {links.map(({ name, href }) => (
          <li key={name}>
            <NavLink href={href}>
              <a>{name}</a>
            </NavLink>
          </li>
        ))}
      </ul>
    </AnimateSharedLayout>
  );
};

export default NavBar;
