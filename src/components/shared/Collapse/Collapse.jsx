import PropTypes from "prop-types";
import { useState, useRef } from "react";
import "./_collapse.scss";
import Chevron from "../../../assets/icons/chevron.svg";

function Collapse({ title, content, HeadingTag = "h2" }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const TitleTag = HeadingTag;

  const toggleCollapse = () => setIsOpen(!isOpen);

  const contentArray = Array.isArray(content)
    ? content
    : content
      ? [content]
      : [];

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
      >
        <TitleTag className="collapse__header-title">{title}</TitleTag>
        <img
          src={Chevron}
          alt="chevron"
          className={`collapse__header-chevron ${isOpen ? "open" : ""}`}
        />
      </button>

      <div
        className="collapse__content-wrapper"
        style={{
          maxHeight:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0",
        }}
      >
        <div
          className={`collapse__content ${isOpen ? "open" : ""}`}
          ref={contentRef}
        >
          {contentArray.map((item, index) => (
            <p key={index} className="collapse__content-item">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
