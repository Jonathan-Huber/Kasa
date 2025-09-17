import { useParams, Navigate } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Slideshow from "../../components/Logement/Slideshow/Slideshow";
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
      <Slideshow images={logement.pictures} />
    </div>
  );
}

export default Logement;
