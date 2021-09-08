/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import thumbnail from "../pages/api/thumbnail";
import styles from "../styles/layouts/Post.module.scss";

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import NavBar from "../components/navbar";
import TagsList from "../components/post/tagsList";
import NewsLetter from "../components/NewsletterForm";

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

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta
          name="description"
          content={`${props.description} | rychillie.net`}
        />
        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={props.description} />

        <meta property="og:site_name" content="🦄 Rychillie" />

        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />

        <meta property="og:image" content={props.thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.thumbnailUrl} />
      </Head>
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
          <main className={styles.postLayout}>
            <div className={styles.socialShare}>
              <span>compartilhe</span>

              <div className={styles.socialShareButtons}>
                <EmailShareButton title={props.title} url={LinkPost}>
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <FacebookShareButton title={props.title} url={LinkPost}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton title={props.title} url={LinkPost}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <PocketShareButton title={props.title} url={LinkPost}>
                  <PocketIcon size={32} round />
                </PocketShareButton>
                <RedditShareButton title={props.title} url={LinkPost}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <TelegramShareButton title={props.title} url={LinkPost}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <TwitterShareButton title={props.title} url={LinkPost}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton title={props.title} url={LinkPost}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
            </div>

            <article className={styles.article}>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
            </article>

            <div className={styles.sideMenu}></div>
          </main>
        </main>

        <NewsLetter />
      </>
    </>
  );
}
