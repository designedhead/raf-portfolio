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
              "With over 5 years of experience in the software industry as a Product Manager and UI/UX Designer, I have developed a deep understanding of the entire product lifecycle and the ability to lead teams of varying sizes. I have a customer-focused approach and an agile mindset, allowing me to quickly deliver minimum viable products and exceed expectations."
            }
          </p>
          <p>
            {
              "As a front-end developer, I bring a wealth of experience and a passion for problem-solving to the table. My love for coding has led me to explore new and innovative solutions. I am confident in my abilities and eager to continue pushing the boundaries of what is possible."
            }
          </p>
          <p>
            {
              "You'll usually find me by my computer building web-apps, creating functional 3D Prints and getting involved with random projects."
            }
          </p>
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
