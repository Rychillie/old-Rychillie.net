/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../styles/components/Header.module.scss";
import { motion } from "framer-motion";

import NavBar from "./navbar";
import SocialList from "./socialList";

type Props = {
  headerApresentation?: boolean | false;
  title?: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Header = ({ headerApresentation, title }: Props) => {
  return (
    <header className={styles.header}>
      <NavBar />

      {headerApresentation ? (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
        >
          <div className={styles.apresentation}>
            <div className={styles.profileImage}>
              <Image
                src={"/rychillie.png"}
                blurDataURL={"/rychillie.png"}
                alt="Rychillie"
                layout="responsive"
                placeholder="blur"
                quality={100}
                width={270}
                height={270}
                loading="lazy"
              />
            </div>
            <div className={styles.sideApresentation}>
              <h1 className={styles.profileApresentation}>
                Olá, Eu sou <b>Rychillie</b>
              </h1>
              <p className={styles.profileDescription}>
                Desenvolvedor Frontend, estudante de UI/UX Design e criador de
                conteúdo, compartilhando seu conhecimento com a comunidade.
              </p>

              <SocialList />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
        >
          <div className={styles.container}>
            <h1 className={styles.titlePage}>{title}</h1>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
