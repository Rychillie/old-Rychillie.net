import React, { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import styles from "../styles/components/Layout.module.scss";

import Header from "./header";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  headerApresentation?: boolean | false;
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
  headerApresentation,
}: Props): JSX.Element => (
  <>
    <Header headerApresentation={headerApresentation} title={title} />

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
      <div className={styles.container}>{children}</div>
    </motion.main>
  </>
);

export default Layout;
