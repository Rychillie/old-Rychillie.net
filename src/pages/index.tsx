import type { NextPage } from "next";
import Head from "next/head";

import thumbnail from "./api/thumbnail";
import { getAllPosts } from "./api/posts";

import styles from "../styles/pages/Home.module.scss";

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
  }>;
}

export default function Home(props: HomeProps) {
  const title = "Página inicial | rychillie.net";
  const description =
    "Desenvolvedor Frontend, estudante de UI/UX Design e criador de conteúdo, compartilhando seu conhecimento com a comunidade.";
  const image = "/unicorn.png";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="🦄 Rychillie" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <NavBar />

      <Header />

      <main className={styles.container}>
        <h2 className={styles.title}>Ultimas publicações:</h2>

        {props.posts.map((post, idx) => (
          <Card
            key={idx}
            postLink={post.slug}
            title={post.title}
            description={post.description}
            thumbnailUrl={post.thumbnailUrl}
            tags={post.tags}
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
