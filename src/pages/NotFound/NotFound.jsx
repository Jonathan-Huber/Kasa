import { Link } from "react-router";
import "./_notfound.scss";

function NotFound() {
  return (
    <div className="notfound container">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__message">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;
