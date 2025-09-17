import { useState } from "react";
import "./_slideshow.scss";
import ChevronLeft from "../../../assets/icons/chevron-left.svg";
import ChevronRight from "../../../assets/icons/chevron-right.svg";

function Slideshow({ images }) {
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

  if (!images || images.length === 0) return null; // un placehoder ?

  return (
    <div className="slideshow">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`slideshow__image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      {images.length > 1 && (
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
