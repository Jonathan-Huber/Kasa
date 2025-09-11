import bannerImage from "../../../assets/images/home-banner.jpg";
import "./_banner.scss";

function Banner() {
  return (
    <section className="banner container">
      <div className="banner__image-wrapper">
        <img
          src={bannerImage}
          alt="Chez vous, partout et ailleurs"
          className="banner__image"
        />
        <div className="banner__overlay"></div>
      </div>
      <h2 className="banner__title">
        Chez vous,
        <span className="banner__line-break"> partout et ailleurs</span>
      </h2>
    </section>
  );
}

export default Banner;
