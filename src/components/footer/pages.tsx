import { AnimateSharedLayout } from "framer-motion";
import styles from "../../styles/components/Footer/Footer.module.scss";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface IProps extends LinkProps {
  children: ReactNode;
}

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

const NavLink = ({ children, href, passHref }: IProps): JSX.Element => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

const Pages = (): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <ul className={styles.pagesList}>
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

export default Pages;
