import { useState } from "react";
import logo from "../../assets/images/logo.png";
import pay from "../../assets/images/Pay.png";
import Button from "../reusables/Button";
import dpay from "../../assets/images/Pay (1).png";
import "./Nav.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="nav-cont">
      <div className="logo-cont">
        <img src={logo} className="logo-cont" alt="logo" />
      </div>
      <div className="nav-menu">
        <a href="#home">
          <ul className="nav-item">Playstation 6</ul>
        </a>
        <a href="#features">
          <ul className="nav-item">Features</ul>
        </a>
        <a href="#games">
          <ul className="nav-item">Games</ul>
        </a>
        <a href="#dual">
          <ul className="nav-item">Accessories</ul>
        </a>
        <a href="#contact">
          <ul className="nav-item">Contact</ul>
        </a>
      </div>

      <div className="ham-menu">
        {isOpen ? (
          <IoClose size={30} onClick={() => setIsOpen(false)} />
        ) : (
          <GiHamburgerMenu size={30} onClick={() => setIsOpen(true)} />
        )}

        {isOpen && (
          <div className="mobile-nav-item">
            <a href="#home">
              <ul className="nav-item">Playstation 6</ul>
            </a>
            <a href="#features">
              <ul className="nav-item">Features</ul>
            </a>
            <a href="#games">
              <ul className="nav-item">Games</ul>
            </a>
            <a href="#dual">
              <ul className="nav-item">Accessories</ul>
            </a>
            <a href="#contact">
              <ul className="nav-item">Contact</ul>
            </a>
          </div>
        )}
      </div>

      <div className="nav-btn">
        <Button content="PRE BOOK" img={pay} dimg={dpay} />
      </div>
    </ul>
  );
}
