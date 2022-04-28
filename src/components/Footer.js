import Moment from "react-moment";

function Footer() {
  const Today = new Date();

  return (
    <footer>
      <p className="footer_info_title">
        Have an Awesome <Moment format="dddd">{Today}</Moment>
      </p>
      <a
        className="footer_info"
        href="https://github.com/designedhead"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by Rafael Mendes
      </a>
    </footer>
  );
}

export default Footer;
