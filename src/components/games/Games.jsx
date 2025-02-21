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
import dpoint from "../../assets/images/Natural User Interface 2 (1).png";
import point from "../../assets/images/Natural User Interface 2.png";

import { useState } from "react";
import Button from "../reusables/Button";
export default function Games() {
  const imageObject = {
    1: { topimg: topimg1, bottomimg: bottomimg1, title: "ASTROBOT" },
    2: { topimg: topimg2, bottomimg: bottomimg2, title: "LAST OF US" },
    3: { topimg: topimg3, bottomimg: bottomimg3, title: "RACHET & CLANK" },
    4: { topimg: topimg4, bottomimg: bottomimg4, title: "EA SPORTS F 25" },
    5: { topimg: topimg5, bottomimg: bottomimg5, title: "HELL DIVERS 2" },
    6: { topimg: topimg6, bottomimg: bottomimg6, title: "SPIDERMAN" },
  };
  const [topimg, setTopimg] = useState(topimg1);
  const [bottomimg, setBottomimg] = useState(bottomimg1);
  const [title, seTitle] = useState(imageObject[1]?.title);
  const changeImage = (value) => {
    setTopimg(imageObject[value]?.topimg);
    setBottomimg(imageObject[value]?.bottomimg);
    seTitle(imageObject[value]?.title);
  };

  return (
    <div className="games-tot-cont" id="games">
      <GameBanner topimg={topimg} bottomimg={bottomimg} title={title} />
      <div className="games-content-cont">
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
