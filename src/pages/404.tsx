import Link from "next/link";
import Image from "next/image";
import styles from "../styles/pages/404.module.scss";

import Layout from "../components/Layout";

interface Page404Props {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
  }>;
}

export default function page404(props: Page404Props) {
  return (
    <Layout
      title={"404 - Não Encontrado"}
      description={"Opps, Pagina não encontrada"}
      // image={"/images/system-error.png"}
      mainPrimary={true}
    >
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
          <div className={styles.containerImage}>
            <Image
              src={"/images/system-error.png"}
              blurDataURL={"/images/system-error.png"}
              alt="system-error"
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
            Ops, parece que essa página não existe.
            <br />
            Ou apenas não está no lugar certo.
          </h2>
          <br />
          <Link href="/">
            <a className={styles.button}>Pagina Inicial</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
