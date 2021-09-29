import thumbnail from "./api/thumbnail";
import { getAllPosts } from "./api/posts";

import styles from "../styles/pages/Home.module.scss";

import HeadContent from "../components/Head";
import NavBar from "../components/navbar";
import Header from "../components/header";
import Card from "../components/post/card";
import NewsLetter from "../components/NewsletterForm";
import Footer from "../components/footer/footer";

interface HomeProps {
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    tags: string[];
    postDay: string;
    postMonth: string;
    postID: string;
  }>;
}

export default function Home(props: HomeProps) {
  const title = "Página inicial";
  const description =
    "Desenvolvedor Frontend, estudante de UI/UX Design e criador de conteúdo, compartilhando seu conhecimento com a comunidade.";
  const image = "/unicorn.png";

  return (
    <>
      <HeadContent title={title} description={description} image={image} />

      <NavBar />

      <Header />

      <main className={styles.container}>
        <h2 className={styles.title}>Ultimas publicações:</h2>

        {props.posts.map((post) => (
          <Card
            key={post.postID}
            postLink={post.slug}
            title={post.title}
            description={post.description}
            thumbnailUrl={post.thumbnailUrl}
            tags={post.tags}
            postDay={post.postDay}
            postMonth={post.postMonth}
          />
        ))}
      </main>

      <NewsLetter />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
