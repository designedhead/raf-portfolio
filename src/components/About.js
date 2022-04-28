import Image from "next/image";
import Raff from "../../public/img/raff.jpg";
function About() {
  return (
    <main className="about" id="about">
      <a className="anchor" id="about_"></a>
      <div className="about_title">
        <h2>About me</h2>
        <div className="horizontal_divider" />
      </div>
      <div className="about_content">
        <div className="about_left">
          <p>
            {
              "Hello! My name is Rafael and I enjoy creating web products. I've been in software for 5+ Years as a Product Manager and UI/UX Designer and about 6 months ago feel in-love with coding myself."
            }
          </p>
          <p>
            {
              "I love taking customer focused approach and an agile methodology to get mvp's out quickly, I've been apart of every stage of a product lifecycle and so I bring a lot to the table as a front-end developer."
            }
          </p>
          <p>
            {
              " I've spent the last 6 Months working on my coding skills and I've worked on projects currently live generating revenue."
            }
          </p>
          <p>
            {"Here are some of the things I've learned over the past 6 months:"}
          </p>
          <ul className="about_lang">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Next/auth</li>
            <li>GROQ</li>
            <li>Stripe.js</li>
            <li>Tailwind</li>
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
