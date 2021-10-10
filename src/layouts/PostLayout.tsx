/* eslint-disable @next/next/no-img-element */
import thumbnail from "../pages/api/thumbnail";
import { useEffect } from "react";
import styles from "../styles/layouts/Post.module.scss";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";

import HeadContent from "../components/Head";
import NavBar from "../components/navbar";
import TagsList from "../components/post/tagsList";
import NewsLetter from "../components/NewsletterForm";
import Share from "../components/share";
import Footer from "../components/footer/footer";

interface PostLayoutProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  content: string;
  tags: string[];
  slug: string;
}

export default function PostLayout(props: PostLayoutProps) {
  const LinkPost = `https://rychillie.net/` + props.slug;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
      <HeadContent
        title={props.title}
        description={props.description}
        image={props.thumbnailUrl}
      />
      <>
        <NavBar />
        <header className={styles.headerPost}>
          <div className={styles.container}>
            <h1>{props.title}</h1>

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
        </header>
        <main className={styles.container}>
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
        </main>

        <NewsLetter />

        <Footer />
      </>
    </>
  );
}
