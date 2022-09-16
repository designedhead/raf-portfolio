function About() {
  return (
    <main className="about " id="about">
      <a className="anchor" id="about_" />
      <div className="about_title">
        <h2>About me</h2>
        <div className="horizontal_divider" />
      </div>
      <div className="about_content">
        <div className="about_left">
          <p>
            {
              "Worked in Software for 5+ years as a Product Manager & UI/UX Designer. I feel in-love with code I found myself chasing it both as a passion and career path."
            }
          </p>
          <p>
            {
              "I love taking customer focused approach and an agile methodology to get mvp's out quickly, I've been apart of every stage of a product lifecycle and lead teams big & small. As such I bring a lot to the table as a front-end developer."
            }
          </p>
          <p>
            {
              "Love solving problems and you'll usually find me by my computer building web-apps, creating functional 3D Prints and getting involved with random projects."
            }
          </p>
          <p>{"Here's are some of my skills:"}</p>
          <ul className="about_lang">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Apollo/ GraphQL </li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Next/auth</li>
            <li>Auth0</li>
            <li>React Native</li>
            <li>GROQ</li>
            <li>Stripe.js</li>
            <li>Tailwind</li>
            <li>Chakra UI</li>
            <li>Always learning more</li>
          </ul>
        </div>
        <div className="about_right">
          <div className="about_image_wrapper">
            <div className="about_image"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
