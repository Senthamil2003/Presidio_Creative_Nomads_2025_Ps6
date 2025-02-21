import FeatureBox from "../reusables/FeatureBox";
import img1 from "../../assets/images/image 9.png";
import img2 from "../../assets/images/image 10.png";
import img3 from "../../assets/images/image 21.png";
import img4 from "../../assets/images/image 23.png";
import img5 from "../../assets/images/image 22.png";

// eslint-disable-next-line react/prop-types
export default function FeatureBoxContainer({ changeIndex }) {
  // Define your feature data in an array
  const features = [
    { img: img1, content: "8K Ultra HD Graphics", width: 110 },
    { img: img2, content: "Next-Gen Ray Tracing", width: 95 },
    { img: img3, content: "AI-Powered Gameplay", width: 70 },
    { img: img4, content: "DualSense 2 Control", width: 52 },
    { img: img5, content: "SSD 3.0 Speed", width: 38 },
  ];

  return (
    <div className="focus-box-tot-cont">

      {features.map((feature, i) => (
        <FeatureBox
          key={i} // Unique key for each feature
          img={feature.img}
          content={feature.content}
          width={feature.width}
          index={i + 1} 
          changeIndex={changeIndex}
        />
      ))}
    </div>
  );
}
