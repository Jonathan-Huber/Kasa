import logo from "../../assets/icons/logo-white.svg"; // logo blanc
import "./_footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <img src={logo} alt="Logo Kasa" className="footer__logo" />
        <p className="footer__text">© 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
