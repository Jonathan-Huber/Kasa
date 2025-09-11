import Banner from "../../components/shared/Banner/Banner";
import ThumbLogement from "../../components/Home/ThumbLogement/ThumbLogement";
import logements from "../../data/logements.json";
import homeBannerImage from "../../assets/images/home-banner.jpg";
import "./_home.scss";

function Home() {
  return (
    <>
      <Banner image={homeBannerImage} alt="Chez vous, partout et ailleurs">
        Chez vous,
        <span className="banner__line-break"> partout et ailleurs</span>
      </Banner>

      <div className="container">
        <div className="home__cards-wrapper">
          <div className="home__cards">
            {logements.map((logement) => (
              <ThumbLogement key={logement.id} logement={logement} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
