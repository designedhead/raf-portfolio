import About from "../src/components/About";
import Hero from "../src/components/Hero";
import Links from "../src/components/Links";
import Nav from "../src/components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Links />
      <Hero />
      <About />
    </div>
  );
}
