function Hero() {
  return (
    <main className="hero" id="hero">
      <h1>Hi, my name is</h1>
      <h2>Rafael Mendes.</h2>
      <h3>I build things for the web.</h3>
      <p>
        {
          "I’m a Front End Developer coming from a Product Manager and UI/UX Designer Background. I work with React.js and other hip frameworks."
        }
      </p>
      <a
        className="button"
        href="#projects"
        style={{ color: "var(--primary)" }}
      >
        View Projects
      </a>
    </main>
  );
}

export default Hero;
