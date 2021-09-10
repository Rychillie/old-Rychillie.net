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

export default function Home(props: AboutProps) {
  return (
    <PageLayout
      title={"Conheça-me"}
      description={"Conheça quem sou e um pouco da minha vida"}
      image={""}
    >
      <div className={styles.doubleContent}>
        <div className={styles.sideImage}>
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
        <div className={styles.sideContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto
            alias totam possimus odit tenetur cumque consequuntur. Et, illum!
            Dolor, deserunt voluptatum accusantium enim architecto corrupti
            fugit repellat eveniet. Sapiente!
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
