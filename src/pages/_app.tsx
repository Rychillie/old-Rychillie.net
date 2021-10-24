import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

import NavBar from "../components/Navbar";
import Header from "../components/Header";
import NewsLetter from "../components/NewsletterForm";
import Footer from "../components/footer/footer";

import * as gtag from "../lib/gtag";
import Analytics from "../components/Analytics";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://rychillie.net${router.route}`;
  const myRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    myRouter.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      myRouter.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [myRouter.events]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Rychillie"
        openGraph={{
          type: "website",
          locale: "pt-Br",
          url,
          description: "O website pessoal de Rychillie, desenvolvedor.",
          site_name: "Rychillie | rychillie.net",
          images: [],
        }}
        canonical={url}
      />
      <NavBar />

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>

      <NewsLetter />

      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
