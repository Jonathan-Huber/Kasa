import PropTypes from "prop-types";
import { Link } from "react-router";
import "./_thumb.scss";

function Thumb({ id, cover, title, HeadingTag = "h2" }) {
  const TitleTag = HeadingTag;
  return (
    <Link to={`/logement/${id}`} className="thumb">
      <img src={cover} alt="" className="thumb__image" />
      <TitleTag className="thumb__title">{title}</TitleTag>
    </Link>
  );
}

Thumb.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  HeadingTag: PropTypes.string,
};

export default Thumb;
