import Image from "next/image";
import styles from "../styles/pages/About.module.scss";

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

export default function About(props: AboutProps) {
  return (
    <PageLayout
      title={"Promoções"}
      description={
        "Compre produtos no meu link, sem gastar nada mais e me ajude a pagar um boletinho!"
      }
      image={""}
    >
      <h2>Titulo de test</h2>
    </PageLayout>
  );
}
