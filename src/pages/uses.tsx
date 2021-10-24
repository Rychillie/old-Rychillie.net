import Image from "next/image";
import styles from "../styles/pages/Uses.module.scss";

import Layout from "../components/Layout";

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
    <Layout
      title={"Uses"}
      description={
        "Aqui você encontra software e hardware que me ajudam a ser mais produtivo."
      }
      mainPrimary={true}
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
            Apps que me ajudam a trabalhar com código.
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

          <br />

          <h2>Produtividade</h2>
          <p>
            Apps que me auxilian na minha produtividade.
            <ul>
              <li>
                <a
                  href="https://sparkmailapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spark Mail
                </a>{" "}
                simplismente o melhor aplicativo para emails.
              </li>
              <li>
                Para editar vetores e trabalhar com UI/UX Design,{" "}
                <a
                  href="https://figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </a>{" "}
                é minha escolha.
              </li>
              <li>
                Sem tempo para ler?!{" "}
                <a
                  href="https://getpocket.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pocket
                </a>{" "}
                é o app que utilizo para salvar links e artigos para ler a
                qualquer momento.
              </li>
            </ul>
          </p>

          <br />

          <h2>Meu setup</h2>
          <p>
            Os dispositivos que fazem do meu setup mais produtivo.
            <ul>
              <li>
                <a
                  href="https://amzn.to/3CrJorD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Macbook Air M1 com 8GB de RAM e 256GB de SSD
                </a>
                , é sem duvida é o melhor notebook para{" "}
                <i>
                  <b>devs</b>
                </i>
                .
              </li>
              <li>
                Meu monitor de 27 polegadas, é o{" "}
                <a
                  href="https://amzn.to/39jV9Ut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dell P2719H
                </a>
                .
              </li>
              <li>
                Meu smartphone é um{" "}
                <a
                  href="https://bit.ly/iphone12miniMgalu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iPhone 12 Mini de 128GB
                </a>{" "}
                e sou apaixonado por ele.
              </li>
              <li>
                Minha escrivaninha é uma Slikdesk Selectia com tampo Slikdesk
                Preto de 135 por 80 cm.
              </li>
              <li>
                Meu Teclado Mecânico é um{" "}
                <a
                  href="https://s.click.aliexpress.com/e/_9jxOlg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Keychron K6
                </a>{" "}
                até o momento o meu favorito.
              </li>
              <li>
                Meu mouse a anos é um{" "}
                <a
                  href="https://amzn.to/3znTnMJ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MX Master 3
                </a>{" "}
                da logitech.
              </li>
              <li>
                Utilizo um{" "}
                <a
                  href="https://s.click.aliexpress.com/e/_9i5QEK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Carregador MagSafe Baseus
                </a>{" "}
                para carregar de forma pratica meu iPhone.
              </li>
              <li>
                De microfone minha escolha é um{" "}
                <a
                  href="https://amzn.to/3CorSVd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blue Yeti Nano
                </a>
                .
              </li>
              <li>
                Utilizo tambem um controlador macro{" "}
                <a
                  href="https://amzn.to/3knjij8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elgato Stream Deck Mini
                </a>
                .
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  );
}
