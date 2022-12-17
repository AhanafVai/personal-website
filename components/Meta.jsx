import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ahanaf Abdullah" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ahanaf",
  keywords: "HTML, CSS,Tailwind, JavaScript,React,Next,Portfolio",
  description:
    "I'm interested in UI/UX and I love to create beautiful and performant products with delightful user experiences.",
};

export default Meta;
