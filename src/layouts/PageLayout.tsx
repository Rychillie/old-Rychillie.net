/* eslint-disable @next/next/no-img-element */
import styles from "../styles/layouts/Page.module.scss";

import HeadContent from "../components/Head";
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
      <HeadContent
        title={props.title}
        description={props.description}
        image={props.image}
      />
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
