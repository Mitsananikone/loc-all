import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font Awesome CDN */}
        <script
          src="https://kit.fontawesome.com/9e8e695298.js"
          crossOrigin="anonymous"
          async
        ></script>

        {/* Default SEO/Social Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        
        {/* Keywords */}
        <meta
          name="keywords"
          content="church, Jesus, Bible, worship, Sunday service, small groups, Alvin, Texas, Living Oaks Church, community, faith, hope, love, hurting, healing, family, children, youth, adults, seniors, outreach, service, prayer, fellowship"
        />

        {/* OpenGraph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Living Oaks Church" />
        <meta
          property="og:description"
          content="Leading REAL people to REAL hope in Jesus"
        />
        <meta property="og:image" content="/images/og-sharing-preview.jpg" />
        <meta property="og:url" content="https://livingoakschurch.org" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}