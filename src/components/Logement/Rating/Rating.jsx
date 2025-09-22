import PropTypes from "prop-types";
import StarFull from "../../../assets/icons/star-full.svg";
import StarEmpty from "../../../assets/icons/star-empty.svg";
import "./_rating.scss";

function Rating({ value, max = 5 }) {
  return (
    <div className="rating">
      {Array.from({ length: max }).map((_, index) => (
        <img
          key={index}
          className="rating__star"
          src={index < value ? StarFull : StarEmpty}
          alt={index < value ? "Étoile pleine" : "Étoile vide"}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
};

export default Rating;
