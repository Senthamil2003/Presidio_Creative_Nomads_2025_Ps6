import { useState } from "react";
import "./Feature.scss";
import bottomimg from "../../assets/images/Rectangle 16.png";
import earbud from "../../assets/images/earbuds.png";
import Button from "../reusables/Button";
import dpoint from "../../assets/images/Natural User Interface 2 (1).png";
import point from "../../assets/images/Natural User Interface 2.png";
import FeatureBoxContainer from "./FeatureBoxContainer";
import data from "../../assets/data/feature.json";

export default function Feature() {
  const [content] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const changeIndex = (value) => {
    // First remove the animation class
    setAnimationClass("animate__fadeOutDown");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCurrentIndex(value);
        setAnimationClass("animate__fadeInUp");
      });
    });
  };

  return (
    <div className="feature-tot-cont" id="features">
      <p className="head-content feature-head">Revolutionary Features</p>
      <div className="feature-content-container">
        <FeatureBoxContainer changeIndex={changeIndex} />

        <div className="feature-cont">
          <p
            className={`small-head-content animate__animated ${animationClass}`}
          >
            {content[currentIndex]?.title}
          </p>
          <p className={`h2-content animate__animated ${animationClass}`}>
            {content[currentIndex]?.description}
          </p>
          <div className="feature-btn">
            <Button content="MORE FEATURES" img={point} dimg={dpoint} />
          </div>
        </div>
        <div className="feature-right">
          <div className="earbud-cont">
            <img src={earbud} alt="" />
          </div>
          <div className="bottom-img-cont">
            <img src={bottomimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
