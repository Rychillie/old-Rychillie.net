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
          <div className={styles.socialMedia}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
