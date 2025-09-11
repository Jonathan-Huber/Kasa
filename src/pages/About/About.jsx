import Banner from "../../components/shared/Banner/Banner";
import aboutBannerImage from "../../assets/images/about-banner.jpg";

function About() {
  return (
    <>
      <Banner
        image={aboutBannerImage}
        alt=""
        overlayClass="banner__overlay--light"
      />
    </>
  );
}

export default About;
