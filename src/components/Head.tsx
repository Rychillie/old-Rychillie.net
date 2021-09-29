/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

interface HeadProps {
  title: string;
  description: string;
  image: string;
}

export default function HeadContent(props: HeadProps) {
  return (
    <Head>
      <title>{props.title} | rychillie.net</title>
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
  );
}
