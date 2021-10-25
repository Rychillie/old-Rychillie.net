import Link from "next/link";
import Image from "next/image";
import styles from "../styles/pages/em-construcao.module.scss";

import Layout from "../components/Layout";

interface emContrucaoProps {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
  }>;
}

export default function emContrucao(props: emContrucaoProps) {
  return (
    <Layout
      title={"Página em contrução"}
      description={"Calma ae, ta quase pronto!"}
      // image={"/images/unfinished_horse.png"}}
    >
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
          <div className={styles.containerImage}>
            <Image
              src={"/images/unfinished_horse.png"}
              blurDataURL={"/images/unfinished_horse.png"}
              alt="unfinished horse"
              layout="responsive"
              placeholder="blur"
              quality={100}
              width={600}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.sideContent}>
          <h2>
            Está pagina está em contrução.
            <br />
            Logo estará pronto!
          </h2>
        </div>
      </div>
    </Layout>
  );
}
