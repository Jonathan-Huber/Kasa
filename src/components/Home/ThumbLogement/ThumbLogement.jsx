import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./_thumblogement.scss";

function ThumbLogement({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="thumb">
      <img src={logement.cover} alt="" className="thumb__image" />
      <h3 className="thumb__title">{logement.title}</h3>
    </Link>
  );
}

ThumbLogement.propTypes = {
  logement: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ThumbLogement;
