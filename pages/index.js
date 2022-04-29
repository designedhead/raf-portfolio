import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Experience from "../src/components/Experience";
import Hero from "../src/components/Hero";
import Links from "../src/components/Links";
import Nav from "../src/components/Nav";
import Projects from "../src/components/Projects";
import Footer from "../src/components/Footer";
import ScrolltoTop from "../src/components/ScrolltoTop";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../src/components/loader";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2900);
  }, []);

  const { ref: abouRef, inView: aboutVisible } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  const { ref: experienceRef, inView: experienceVisible } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  const { ref: projectsRef, inView: projectsVisible } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  const { ref: contactRef, inView: contactVisible } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

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
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <ScrolltoTop />
          <Links />
          <Hero />
          <div
            ref={abouRef}
            className={aboutVisible ? "slide-up-body" : "hidebody"}
          >
            <About />
          </div>
          <div
            ref={experienceRef}
            className={experienceVisible ? "slide-up-body" : "hidebody"}
          >
            <Experience />
          </div>
          <div
            ref={projectsRef}
            className={projectsVisible ? "slide-up-body" : "hidebody"}
          >
            <Projects />
          </div>
          <div
            ref={contactRef}
            className={contactVisible ? "slide-up-body" : "hidebody"}
          >
            <Contact />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
