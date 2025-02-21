import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function GameBanner({ topimg, bottomimg, title }) {
  const [animationClass, setAnimationClass] = useState({
    top: "",
    bottom: "",
    card: "",
    isLoad: true,
  });

  useEffect(() => {
    // Remove animation class first
    setAnimationClass({
      top: "animate__fadeOutTopLeft",
      bottom: "animate__fadeOutBottomRight",
      card: "",
      isLoad: false,
    });

    // Use requestAnimationFrame to ensure proper timing
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Add animation class back
        setAnimationClass({
          top: "animate__fadeInTopLeft",
          bottom: "animate__fadeInBottomRight",
          card: "animate__fadeInUp",
          isLoad: true,
        });
      });
    });
  }, [topimg]);

  if (animationClass.isLoad)
    return (
      <div className="game-banner-tot-cont">
        <div className="top-banner-img">
          <img
            src={topimg}
            alt=""
            className={`animate__animated ${animationClass.top}`}
          />
        </div>
        <div className="game-title">
          <p
            className={`small-head-content animate__animated ${animationClass.card}`}
          >
            {title}
          </p>
        </div>
        <div className="bottom-banner-img">
          <img
            src={bottomimg}
            alt=""
            className={`animate__animated ${animationClass.bottom}`}
          />
        </div>
      </div>
    );
}
