import "./App.scss";
import Dualcontroller from "./components/dualcontroller/Dualcontroller";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Games from "./components/games/Games";
import Home from "./components/home/Home";
import "animate.css";

function App() {
  return (
    <>
      <div className="App" style={{ scrollBehavior: "smooth" }}>
        <Home />
        <Dualcontroller />
        <Feature />
        <Games />
        <Footer />
        {/* <Sample /> */}
      </div>
    </>
  );
}

export default App;
