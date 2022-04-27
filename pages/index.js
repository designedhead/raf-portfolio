import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Hero from "../src/components/Hero";
import Links from "../src/components/Links";
import Nav from "../src/components/Nav";
import Projects from "../src/components/Projects";

export default function Home() {
  return (
    <div>
      <Nav />
      <Links />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
