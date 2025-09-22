import { useState } from "react";
import "./_slideshow.scss";
import ChevronLeft from "../../../assets/icons/chevron-left.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";
import PlaceholderImg from "../../../assets/images/placeholder.webp";

function Slideshow({ images, placeholderText }) {
  const hasImages = images && images.length > 0;
  const displayImages = hasImages ? images : [PlaceholderImg];
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? images.length - 1 : previousIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <div className="slideshow">
      {displayImages.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`slideshow__image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {!hasImages && placeholderText && (
        <div className="slideshow__placeholder-text">{placeholderText}</div>
      )}

      {displayImages.length > 1 && hasImages && (
        <>
          <button
            className="slideshow__nav slideshow__nav--previous"
            onClick={previousSlide}
          >
            <img src={ChevronLeft} alt="Précédent" />
          </button>
          <button
            className="slideshow__nav slideshow__nav--next"
            onClick={nextSlide}
          >
            <img src={ChevronRight} alt="Suivant" />
          </button>
          <span className="slideshow__counter">
            {currentIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
