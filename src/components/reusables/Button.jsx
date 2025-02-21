import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Button({ content, img, dimg }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="button-cont">
      <button
        className="outline-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>
          {content}{" "}
          <div className="btn-img-cont">
            <img src={!isHovered ? img : dimg} alt="" />
          </div>
        </span>
      </button>
    </div>
  );
}
