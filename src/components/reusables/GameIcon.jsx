import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function GameIcon({ index, image, changeImage }) {
  const timerRef = useRef(null);
  // the function only called when the user plase the mouse for half second to prevent unwanted renders
  const handleMouseEnter = () => {
    // timerRef.current = setTimeout(() => {
    changeImage(index);
    // }, 400);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="game-icon-outer" key={index}>
      <div
        className="game-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="" />
      </div>
    </div>
  );
}
