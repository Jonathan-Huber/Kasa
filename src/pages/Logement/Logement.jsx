import { useParams, Navigate } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Slideshow from "../../components/Logement/Slideshow/Slideshow";
import Tag from "../../components/Logement/Tag/Tag";
import Rating from "../../components/Logement/Rating/Rating";
import Collapse from "../../components/shared/Collapse/Collapse";
import "./_logement.scss";

function Logement() {
  const { id } = useParams();

  // Trouver le logement correspondant à l'id
  const logement = logementsData.find((item) => item.id === id);

  // Si aucun logement trouvé, rediriger vers 404
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="logement container">
      <Slideshow
        images={logement.pictures}
        placeholderText="Aucune photos de logement disponible"
      />
      <div className="logement__info">
        <div className="logement__info-bloc1">
          <div className="logement__info-bloc1-top">
            <h1 className="logement__info-bloc1-top-title">{logement.title}</h1>
            <p className="logement__info-bloc1-top-location">
              {logement.location}
            </p>
          </div>
          <div className="logement__info-bloc1-tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>
        <div className="logement__info-bloc2">
          <Rating value={logement.rating} />
          <div className="logement__info-bloc2-host">
            <p className="logement__info-bloc2-host-name">
              {logement.host.name}
            </p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement__info-bloc2-host-picture"
            />
          </div>
        </div>
      </div>
      <div className="logement__collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}

export default Logement;
