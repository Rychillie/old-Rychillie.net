/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/layouts/Page.module.scss";

import NavBar from "../components/navbar";
import NewsLetter from "../components/NewsletterForm";
import Footer from "../components/footer/footer";

interface PageLayoutProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
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

        <meta property="og:image" content={props.image} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.image} />
      </Head>
      <>
        <NavBar />

        <header className={styles.headerPage}>
          <div className={styles.container}>
            <h1>{props.title}</h1>
          </div>
        </header>

        <main className={styles.container}>
          <div className={styles.pageLayout}>{props.children}</div>
        </main>

        <NewsLetter />

        <Footer />
      </>
    </>
  );
}
