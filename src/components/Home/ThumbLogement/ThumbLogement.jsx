import { Link } from "react-router-dom";
import "./_thumblogement.scss";

function ThumbLogement({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="thumb">
      <img src={logement.cover} alt={logement.title} className="thumb__image" />
      <h3 className="thumb__title">{logement.title}</h3>
    </Link>
  );
}

export default ThumbLogement;
