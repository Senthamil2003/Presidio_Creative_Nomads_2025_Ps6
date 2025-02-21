import "./dualcontroller.scss";
import img1 from "../../assets/images/image 2.png";
import img2 from "../../assets/images/image 3.png";
import img3 from "../../assets/images/image 4.png";
export default function Dualcontroller() {
  return (
    <div className="dual-tot-cont" id="dual">
      <p className="head-content dual-txt">
        DualSense 2 Controller <br />
        The Ultimate Gaming Companionr
      </p>
      {/* <p className="head-content"> The Ultimate Gaming Companionr</p> */}
      <p className="h1-content">Feel Every Moment, Control Every Move</p>
      <div className="box-animation-cont">
        <div className="box-cont ani-img-1">
          <img src={img2} />
        </div>
        <div className="box-cont ani-img-2">
          <img src={img1} />
        </div>
        <div className="box-cont ani-img-3">
          <img src={img3} />
        </div>
      </div>
    </div>
  );
}
