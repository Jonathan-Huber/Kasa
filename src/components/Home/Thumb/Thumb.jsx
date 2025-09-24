import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./_thumb.scss";

function Thumb({ id, cover, title }) {
  return (
    <Link to={`/logement/${id}`} className="thumb">
      <img src={cover} alt="" className="thumb__image" />
      <h3 className="thumb__title">{title}</h3>
    </Link>
  );
}

Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumb;
