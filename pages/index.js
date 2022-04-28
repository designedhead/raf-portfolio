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

const Projects = dynamic(() => import("../src/components/Projects"), {
  loading: () => <p>...</p>,
});
const Footer = dynamic(() => import("../src/components/Footer"), {
  loading: () => <p>...</p>,
});

export default function Home() {
  return (
    <div>
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
