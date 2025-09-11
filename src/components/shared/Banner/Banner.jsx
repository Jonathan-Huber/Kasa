import "./_banner.scss";

function Banner({ image, alt = "", children, overlayClass = "" }) {
  return (
    <section className="banner container">
      <div className="banner__image-wrapper">
        <img src={image} alt={alt} className="banner__image" />
        <div className={`banner__overlay ${overlayClass}`}></div>
      </div>

      {children && <h2 className="banner__title">{children}</h2>}
    </section>
  );
}

export default Banner;
