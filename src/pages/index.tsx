import type { NextPage } from "next";
import Head from "next/head";

import thumbnail from "./api/thumbnail";
import { getAllPosts } from "./api/posts";

import styles from "../styles/pages/Home.module.scss";

import NavBar from "../components/navbar";
import Header from "../components/header";
import Card from "../components/post/card";
import NewsLetter from "../components/NewsletterForm";

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
  return (
    <>
      <Head>
        <title>Página inicial | rychillie.net</title>
        <meta
          name="description"
          content="Desenvolvedor Frontend, estudante de UI/UX Design e criador de conteúdo, compartilhando seu conhecimento com a comunidade."
        />
        <link rel="icon" href="/favicon.ico" />
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
