import Head from "next/head";
import Script from "next/script";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Yunior A. Vidal" />
        <meta itemProp="name" content="Avidal Design" />
        <meta itemProp="description" content="Sobre Yunior A. Vidal" />
        <link rel="canonical" href="https://avidal.design" />

        <meta name="twitter:title" content="Avidal Design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Sobre Yunior A. Vidal" />
        <meta name="twitter:site" content="avidal_design" />
        <meta name="twitter:creator" content="YuniorAVidal1" />
        <meta
          name="twitter:image:src"
          content="https://avidal.design/img/twitter.jpg"
        />

        <meta name="og:title" content="Avidal Design" />
        <meta name="og:description" content="Sobre Yunior A. Vidal" />
        <meta name="og:image" content="https://avidal.design/img/twitter.jpg" />
        <meta name="og:url" content="https://avidal.design" />
        <meta name="og:site_name" content="Avidal Design" />
        <meta name="og:locale" content="es_CU" />
        <meta name="og:type" content="website" />
        <title>Avidal Design</title>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="img/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="img/apple-touch-icon-152x152.png"
        />
      </Head>
      {children}
      <Script src="js/jquery.js" />
      <Script src="js/bootstrap.min.js" />
      <Script src="js/menu-color.js" />
      <Script src="js/modernizr.js" />
      <Script src="js/script.js" />
    </div>
  );
};

export default BaseLayout;
