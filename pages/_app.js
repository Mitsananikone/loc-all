import dynamic from "next/dynamic";
import Head from "next/head";
import "@/styles/globals.css";

// Dynamically import Navbar with SSR disabled
const Navbar = dynamic(() => import("@/components/nav/nav"), {
  ssr: false, // Disable server-side rendering for Navbar
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* SVG favicon (optional) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

        {/* Android Chrome */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Navbar /> {/* Navbar will only render on the client side */}
      <Component {...pageProps} />
    </>
  );
}
