import PropTypes from "prop-types";
import { useRef } from "react";
export default function FeatureBox({
  img,
  content,
  width,
  changeIndex,
  index,
}) {
  const timerRef = useRef(null);
  // the function only called when the user plase the mouse for half second to prevent unwanted renders
  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      changeIndex(index);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  return (
    <div
      className="feature-box-cont "
      style={{ width: `${width}%` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="feature-focus-cont">
        <img src={img} alt={content} />
      </div>

      <p className="smaller-head-content">{content}</p>
    </div>
  );
}

FeatureBox.propTypes = {
  img: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
