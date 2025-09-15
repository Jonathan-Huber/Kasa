import "./_about.scss";
import Banner from "../../components/shared/Banner/Banner";
import aboutBannerImage from "../../assets/images/about-banner.jpg";

import Collapse from "../../components/shared/Collapse/Collapse";
import aboutData from "../../data/about.json";

function About() {
  return (
    <div className="about">
      <Banner
        image={aboutBannerImage}
        alt=""
        overlayClass="banner__overlay--light"
      />

      <div className="about__collapses container">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
