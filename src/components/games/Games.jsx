// import Button from "../reusables/Button";
import GameBanner from "../reusables/GameBanner";
import GameIconContainer from "./GameIconContainer";
import "./Games.scss";

import topimg1 from "../../assets/images/topimg1.png";
import topimg2 from "../../assets/images/topimg2.png";
import topimg3 from "../../assets/images/topimg3.png";
import topimg4 from "../../assets/images/topimg4.png";
import topimg5 from "../../assets/images/topimg5.png";
import topimg6 from "../../assets/images/topimg6.png";
import bottomimg1 from "../../assets/images/bottomimg1.png";
import bottomimg2 from "../../assets/images/bottomimg2.png";
import bottomimg3 from "../../assets/images/bottomimg3.png";
import bottomimg4 from "../../assets/images/bottomimg4.png";
import bottomimg5 from "../../assets/images/bottomimg5.png";
import bottomimg6 from "../../assets/images/bottomimg6.png";
import dpoint from "../../assets/images/Game Controller (1).png";
import point from "../../assets/images/Game Controller.png";

import { useEffect, useState } from "react";
import Button from "../reusables/Button";
export default function Games() {
  const imageObject = {
    1: {
      topimg: topimg1,
      bottomimg: bottomimg1,
      title: "ASTROBOT",
      color: "#0824887b",
    },
    2: {
      topimg: topimg2,
      bottomimg: bottomimg2,
      title: "LAST OF US",
      color: "#de89136c",
    },
    3: {
      topimg: topimg3,
      bottomimg: bottomimg3,
      title: "RACHET & CLANK",
      color: "#9f06b377",
    },
    4: {
      topimg: topimg4,
      bottomimg: bottomimg4,
      title: "EA SPORTS F 25",
      color: "#581e0462",
    },
    5: {
      topimg: topimg5,
      bottomimg: bottomimg5,
      title: "HELL DIVERS 2",
      color: "#5650a17b",
    },
    6: {
      topimg: topimg6,
      bottomimg: bottomimg6,
      title: "SPIDERMAN",
      color: "#a30d0874",
    },
  };
  const [topimg, setTopimg] = useState(topimg1);
  const [bottomimg, setBottomimg] = useState(bottomimg1);
  const [color, setColor] = useState(imageObject[1]?.color);
  const [title, seTitle] = useState(imageObject[1]?.title);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1250);
  const changeImage = (value) => {
    setTopimg(imageObject[value]?.topimg);
    setBottomimg(imageObject[value]?.bottomimg);
    seTitle(imageObject[value]?.title);
    setColor(imageObject[value]?.color);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="games-tot-cont" id="games">
      <GameBanner topimg={topimg} bottomimg={bottomimg} title={title} />
      <div
        className="games-content-cont"
        style={isMobile ? { background: color } : {}}
      >
        <p className="head-content">Play Your Way !</p>

        <p className="h2-content">
          Embark on Epic Adventures, Conquer New Worlds, and Redefine Your
          Gaming Journey with PS6 Exclusive Titles and Enhanced Classics
        </p>
        <GameIconContainer changeImage={changeImage} />
        <div>
          <Button content="GET GAME NOW" img={point} dimg={dpoint} />
        </div>
      </div>
    </div>
  );
}
