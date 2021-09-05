/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
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
          <ul className={styles.socialMedia}>
            <li>
              <a href="" target="_blank">
                <img src="/icons/twitter.svg" alt="Twitter" />
              </a>
              <span className={styles.socialName}>Twitter</span>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <span className={styles.socialName}>Instagram</span>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/icons/github.svg" alt="Github" />
              </a>
              <span className={styles.socialName}>Github</span>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/icons/linkedin.svg" alt="Linkedin" />
              </a>
              <span className={styles.socialName}>Linkedin</span>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/icons/dribbble.svg" alt="Dribbble" />
              </a>
              <span className={styles.socialName}>Dribbble</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
