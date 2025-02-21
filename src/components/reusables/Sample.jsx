import { useState } from "react";

const Sample = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" ,backgroundColor:"black"}}>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Fade</button>
      <div
        className={`fade-box ${isVisible ? "show" : ""}`}
        style={{
          width: "200px",
          height: "100px",
          background: "blue",
          margin: "20px auto",
          transition: "opacity 0.3s ease-in-out",
          opacity: isVisible ? 1 : 0,
        }}
      ></div>
    </div>
  );
};

export default Sample;
