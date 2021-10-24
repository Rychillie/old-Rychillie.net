/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Prism from "prismjs";
import Layout from "../components/Layout";
import { getPostBySlug, getAllPosts } from "./api/posts";
import { GetStaticPropsContext } from "next";
import styles from "../styles/layouts/Post.module.scss";

import TagsList from "../components/post/tagsList";
import Share from "../components/share";

interface PostProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  content: string;
  tags: string[];
  slug: string;
}

export default function Post(props: PostProps) {
  const LinkPost = `https://rychillie.net/` + props.slug;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Layout
      title={props.title}
      description={props.description}
      headerPrimary={false}
    >
      <div className={styles.headerPost}>
        <div className={styles.container}>
          <TagsList tags={props.tags} />
        </div>

        <div className={styles.thumbnail}>
          <img
            width="1170"
            src={props.thumbnailUrl}
            alt={props.title}
            loading="lazy"
          />
          <img
            width="1170"
            src={props.thumbnailUrl}
            alt={props.title}
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.postLayout}>
          <div className={styles.socialShare}>
            <span>compartilhe</span>

            <Share title={props.title} LinkPost={LinkPost} />
          </div>

          <article className={styles.article}>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
          </article>

          {/* <div className={styles.sideMenu}></div> */}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();

  paths = paths.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
