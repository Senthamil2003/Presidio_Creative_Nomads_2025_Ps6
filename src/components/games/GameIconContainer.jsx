import GameIcon from "../reusables/GameIcon";
import icon1 from "../../assets/images/Ellipse 2.png";
import icon2 from "../../assets/images/Ellipse 4.png";
import icon3 from "../../assets/images/Ellipse 3.png";
import icon4 from "../../assets/images/Ellipse 1.png";
import icon5 from "../../assets/images/Ellipse 6.png";
import icon6 from "../../assets/images/Ellipse 5.png";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

// eslint-disable-next-line react/prop-types
export default function GameIconContainer({changeImage}) {
  return (
    <div className="game-icon-cont">
      {icons.map((icon, index) => (
        <GameIcon changeImage={changeImage} index={index+1} key={index} image={icon} />
      ))}
    </div>
  );
}
