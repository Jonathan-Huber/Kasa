import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo-primary.svg";
import "./_header.scss";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="header container">
      <div className="header__logo">
        {isHome ? (
          <h1>
            <img src={logo} alt="Logo Kasa" />
          </h1>
        ) : (
          <NavLink to="/">
            <img src={logo} alt="Logo Kasa" />
          </NavLink>
        )}
      </div>

      <nav className="header__nav">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
