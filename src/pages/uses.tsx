import Image from "next/image";
import styles from "../styles/pages/Uses.module.scss";

import PageLayout from "../layouts/PageLayout";

interface AboutProps {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
  }>;
}

export default function Home(props: AboutProps) {
  return (
    <PageLayout
      title={"Uses"}
      description={
        "Aqui você encontra software e hardware que me ajudam a ser mais produtivo."
      }
      image={""}
    >
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
          <div className={styles.containerImage}>
            <Image
              src={"/setup.jpg"}
              blurDataURL={"/setup.jpg"}
              alt="My desktop setup"
              layout="responsive"
              placeholder="blur"
              quality={100}
              width={360}
              height={640}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.sideContent}>
          <h2>Editores + Terminal</h2>
          <p>
            <ul>
              <li>
                <a
                  href="https://code.visualstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </a>{" "}
                basicamente meu editor de código padrão.
              </li>
              <li>
                XCode IDE para desenvolvimento IOS e estudos de Swift e SwiftUI.
              </li>
              <li>
                <a
                  href="https://ohmyz.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ZSH
                </a>{" "}
                é meu Terminal padrão.
              </li>
              <li>
                Safari é meu navegador padrão. Google Chrome para
                Desenvolvimento Web.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
