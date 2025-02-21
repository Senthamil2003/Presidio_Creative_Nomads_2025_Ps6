import Nav from "../navbar/Nav";
import "./Home.scss";
import playstation6 from "../../assets/images/ps.png";
import pay from "../../assets/images/Pay.png";
import glass from "../../assets/images/Glasses.png";
import dglass from "../../assets/images/Glasses (1).png";
import dpay from "../../assets/images/Pay (1).png";
import Button from "../reusables/Button";

export default function Home() {
  return (
    <div className="home-cont" id="home">
      <Nav />
      {/* <span className="nav-line"></span> */}
      <div className="home-content-container">
        <div className="home-left">
          <p className="h1-content home-h2-txt">The Future Gaming Is Here</p>
          <hr className="home-line" />
          <p className="head-content head-txt">
            Introducing PlayStation 6 with Power and Precision
          </p>
          <p className="h2-content home-text">
            A New Era of Gaming Begins, Where Every Moment Feels More Real,
            Every Action More Precise, and Every Experience More Immersive Than
            Ever Before, Redefining What’s Possible in the World of Play.
          </p>

          <div className="home-btn-cont">
            <Button content="PRE BOOK" img={pay} dimg={dpay} />
            <Button content="WATCH THE REVEAL" img={glass} dimg={dglass} />
          </div>
        </div>
        <div className="home-right">
          <div className="home-img-cont">
            <img src={playstation6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
