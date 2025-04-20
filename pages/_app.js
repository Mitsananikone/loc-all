import dynamic from "next/dynamic";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";

// Dynamically import Navbar with SSR disabled
const Navbar = dynamic(() => import("@/components/nav/nav"), {
  ssr: false, // Disable server-side rendering for Navbar
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Default SEO */}

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <title key="default-title">
          Living Oaks Church | Real Hope in Jesus
        </title>
        <meta
          name="description"
          content="Leading REAL people with REAL hurts to find REAL hope in Jesus Christ."
          key="description"
        />

        {/* Favicon Setup */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar /> {/* Client-side only Navbar */}
      <Component {...pageProps} />
      <Analytics mode="production" /> {/* Vercel Analytics */}
    </>
  );
}
