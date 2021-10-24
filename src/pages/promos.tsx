import Image from "next/image";
import styles from "../styles/pages/Promos.module.scss";
import { getAllPromos } from "./api/posts";

import Layout from "../components/Layout";
import CardPromo from "../components/post/cardPromo";

interface PromosProps {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
  }>;
  promos: Array<{
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    postID: string;
    linkPromo: string;
    price: string;
  }>;
}

export default function About(props: PromosProps) {
  return (
    <Layout
      title={"Promoções"}
      description={
        "Compre produtos no meu link, sem gastar nada mais e me ajude a pagar um boletinho!"
      }
      mainPrimary={true}
    >
      <div className={styles.listPromos}>
        {props.promos.map((promos) => (
          <CardPromo
            key={promos.postID}
            linkPromo={promos.linkPromo}
            title={promos.title}
            description={promos.description}
            thumbnailUrl={promos.thumbnailUrl}
            price={promos.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPromos = await getAllPromos();

  return {
    props: {
      promos: allPromos,
    },
  };
}
