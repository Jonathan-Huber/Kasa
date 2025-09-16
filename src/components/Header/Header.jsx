import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo-primary.svg";
import "./_header.scss";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <header className="header container">
      <div className="header__logo">
        {isHome ? (
          <h1>
            <img src={logo} alt="Logo Kasa" />
          </h1>
        ) : (
          <Link to="/">
            <img src={logo} alt="Logo Kasa" />
          </Link>
        )}
      </div>

      <nav className="header__nav">
        <Link to="/" className={isHome ? "active" : ""}>
          Accueil
        </Link>
        <Link to="/about" className={isAbout ? "active" : ""}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
