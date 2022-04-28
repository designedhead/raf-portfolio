import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Experience from "../src/components/Experience";
import Hero from "../src/components/Hero";
import Links from "../src/components/Links";
import Nav from "../src/components/Nav";
//import Projects from "../src/components/Projects";
//import Footer from "../src/components/Footer";
import ScrolltoTop from "../src/components/ScrolltoTop";

import dynamic from "next/dynamic";
import Head from "next/head";

const Projects = dynamic(() => import("../src/components/Projects"), {
  loading: () => <p>...</p>,
});
const Footer = dynamic(() => import("../src/components/Footer"), {
  loading: () => <p>...</p>,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rafael Mendes || Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Personal Front-end Developer Portfolio for Rafael Mendes."
        ></meta>
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#63ffda" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Nav />
      <ScrolltoTop />
      <Links />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
