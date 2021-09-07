import type { NextPage } from "next";
import Head from "next/head";

import thumbnail from "./api/thumbnail";
import { getAllPosts } from "./api/posts";

import styles from "../styles/pages/Home.module.scss";

import NavBar from "../components/navbar";
import Header from "../components/header";
import Card from "../components/post/card";

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Header />

      <main className={styles.container}>
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
