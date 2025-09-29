import PropTypes from "prop-types";
import "./_banner.scss";

function Banner({
  image,
  alt = "",
  children,
  overlayClass = "",
  HeadingTag = "h2",
}) {
  const TitleTag = HeadingTag;
  return (
    <section className="banner">
      <div className="banner__image-wrapper">
        <img src={image} alt={alt} className="banner__image" />
        <div className={`banner__overlay ${overlayClass}`}></div>
      </div>

      {children && <TitleTag className="banner__title">{children}</TitleTag>}
    </section>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  overlayClass: PropTypes.string,
  HeadingTag: PropTypes.string,
};

export default Banner;
