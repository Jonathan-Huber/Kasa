import "./_thumblogement.scss";

function ThumbLogement({ logement }) {
  return (
    <a href="#" className="card">
      <img src={logement.cover} alt={logement.title} className="card__image" />
      <h3 className="card__title">{logement.title}</h3>
    </a>
  );
}

export default ThumbLogement;
