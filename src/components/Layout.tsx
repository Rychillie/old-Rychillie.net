import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Header from "./Header";

import styles from "../styles/components/Layout.module.scss";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  headerPrimary?: boolean | false;
  mainPrimary?: boolean | false;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({
  children,
  title,
  description,
  headerPrimary,
  mainPrimary,
}: Props): JSX.Element => (
  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
    >
      {headerPrimary ? (
        <Header />
      ) : (
        <header className={styles.headerPage}>
          <div className={styles.container}>
            <h1>{title}</h1>
          </div>
        </header>
      )}

      {mainPrimary ? (
        <div className={styles.container}>
          <div className={styles.pageLayout}>{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </motion.main>
  </>
);

export default Layout;
