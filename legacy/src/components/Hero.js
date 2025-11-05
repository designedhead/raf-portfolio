function Hero() {
  return (
    <main
      className="hero"
      id="hero"
    
    >
      <h1 className="slide-up">Hi, my name is</h1>
      <h2 className="slide-up2">Rafael Mendes.</h2>
      <h3 className="slide-up3">I build things.</h3>
      <p className="slide-up4">
        {"Full Stack Web Engineer with a Product Manager and UI/UX Background."}
      </p>
      <a
        className="button slide-up5 "
        href="#projects"
        style={{ color: "var(--primary)" }}
      >
        View Projects
      </a>
    </main>
  );
}

export default Hero;
