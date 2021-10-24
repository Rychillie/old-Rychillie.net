import Image from "next/image";
import styles from "../styles/pages/About.module.scss";

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

export default function About(props: AboutProps) {
  return (
    <Layout
      title={"Conheça-me"}
      description={"Conheça quem sou e um pouco da minha vida"}
      mainPrimary={true}
    >
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
          <div className={styles.containerImage}>
            <Image
              src={"/rychillie_big.jpg"}
              blurDataURL={"/rychillie_big.jpg"}
              alt="Rychillie"
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
          <p>
            Rychillie Umpierre de Olvieira, nascido em 3 de outubro de 1996 em
            Novo Hamburgo, Rio Grande do Sul, Brasil, é uma pessoa muito
            simpática, com uma boa relação com a natureza e com a humanidade. É
            um pouco mais fofo que o resto da galera, mas é muito mais simpático
            que o resto da galera. Brincadeiras a parte, esssa ultima parte quem
            escreveu foi o Github Copilot.
          </p>
          <p>
            Se fosse descrever minha personalidade, eu seria um debochado, gosto
            de ver pessoas a minha volta felizes, me preocupo muito com o
            próximo, faz parte da minha pessoa e da minha criação se preocupar
            com o próximo. Até por isso tenho um grande interesse em
            compartilhar conhecimento e com essa ideia venho a criar este
            website. Compartilhar meu conhecimento e ajudar a comunidade.
          </p>
          <p>
            Meu interesse em desenvolvimento começou por causa de jogos
            eletronicos, mais especificamente por causa de Minecraft. Na época
            meu computador não era capaz de rodar a maioria dos jogos de alta
            qualidade, com isso me aventurei nos &quot;Jogos Indies&quot; e com
            isso me apaixonei, vi que era possivel se criar coisas magnificas
            com grandes limitações.
          </p>
          <p>
            Por um tempo desenvolvimento de games foi meu sonho, mas pelo fato
            do mercado ser pequeno na região em que eu vivia, eu não consegui me
            dedicar ao desenvolvimento de jogos. Por isso, coloquei o pé no chão
            e comecei a ver em que area eu poderia atuar, com meu pouco
            conhecimento e muito interesse em desenvolvimento. Então fui para o
            Desenvolvimento Web, com o pensamento de atuar no mercado Mobile,
            que na época era muito mais comentado devivo ao sucesso do iPhone da
            Apple e a chegada dos smartphones.
          </p>
          <p>
            Estudei por muito tempo e trabalhei em diversas areas dentro do
            desenvolvimento web, com diversas tecnologias, começando com PHP
            usando Laravel, Bootstrap no seu auge, junto de JQuery, criando
            aplicações web na prefeitura da minha cidade como estagiario, depois
            de um tempo trabalhando em Agencias de marketing criando landing
            pages e ecommerces, alem de atuar como freelancer por cerca de dois
            anos.
          </p>
          <p>
            Logo após tive a oportunidade de atuar em uma grande plataforma de
            ecommerce do pais, criando layouts e temas, fazendo a diferença na
            vida dos clientes. Também tive a oportunidade e muito orgulho de ter
            feito parte de uma equipe, que cria soluções de IOT, para outras
            empresas crescerem e fazerem a diferença.
          </p>
          <p>
            Atualmente trabalho como Desenvolvedor Front-end em tempo integral,
            no meu tempo livre busco colaborar com a comunidade de
            desenvolvedores, ensinar e partilhar meu conhecimento. Estudo UI
            Design e Desenvolvimento IOS. Dois interesses antigos que gosto de
            compartilhar com aqueles que me acompanham.
          </p>
        </div>
      </div>
    </Layout>
  );
}
