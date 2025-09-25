import Banner from "../../components/shared/Banner/Banner";
import Thumb from "../../components/Home/Thumb/Thumb";
import logements from "../../data/logements.json";
import homeBannerImage from "../../assets/images/home-banner.webp";
import "./_home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={homeBannerImage} alt="Chez vous, partout et ailleurs">
        Chez vous,
        <span className="banner__line-break"> partout et ailleurs</span>
      </Banner>

      <div className="container">
        <div className="home__thumbs">
          {logements.map(({ id, cover, title }) => (
            <Thumb
              key={id}
              id={id}
              cover={cover}
              title={title}
              HeadingTag={"h3"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
