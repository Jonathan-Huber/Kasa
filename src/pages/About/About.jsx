import "./_about.scss";
import Banner from "../../components/shared/Banner/Banner";
import aboutBannerImage from "../../assets/images/about-banner.webp";

import Collapse from "../../components/shared/Collapse/Collapse";
import aboutData from "../../data/about.json";

function About() {
  return (
    <div className="about">
      <h1 className="sr-only">À propos de Kasa</h1>
      <Banner
        image={aboutBannerImage}
        alt=""
        overlayClass="banner__overlay--light"
      />

      <div className="about__collapses container">
        {aboutData.map((item) => (
          <Collapse key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
