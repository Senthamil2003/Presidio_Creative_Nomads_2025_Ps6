import "./Footer.scss";
import playstation from "../../assets/images/playstationlogo.png";
import insta from "../../assets/images/Instagram.png";
import twitter from "../../assets/images/X.png";
import facebook from "../../assets/images/Facebook.png";
import youtube from "../../assets/images/YouTube.png";
import globe from "../../assets/images/globe.png";

export default function Footer() {
  return (
    <div className="footer-tot-cont" id="contact">
      <div className="footer-head">
        <img src={playstation} alt="logo" />
        <p className="small-head-content">playstation</p>
      </div>
      <hr className="footer-line" />
      <div className="footer-content-cont">
        <div className="footer-content">
          <p className="h2-content h1-footer">About</p>
          <p>About SIE</p>
          <p>Careers</p>
          <p>PlayStation Studios</p>
          <p>PlayStation Productions</p>
        </div>

        <div className="footer-content">
          <p className="h2-content h1-footer">Products</p>
          <p>PS5</p>
          <p>PS4</p>
          <p>PS VR2</p>
          <p>Accessories</p>
        </div>

        <div className="footer-content">
          <p className="h2-content h1-footer">Values</p>
          <p>Environment</p>
          <p>Accessibility</p>
          <p>Online Safety</p>
          <p>Diversity & Inclusion</p>
        </div>

        <div className="footer-content">
          <p className="h2-content h1-footer">Support</p>
          <p>Support Hub</p>
          <p>PlayStation Safety</p>
          <p>PSN Status</p>
          <p>Repairs</p>
        </div>

        <div className="footer-content">
          <p className="h2-content h1-footer">Resources</p>
          <p>PSN Terms of Service</p>
          <p>PS Store Cancellation Policy</p>
          <p>Age Ratings</p>
          <p>Health Warning</p>
        </div>

        <div className="footer-content">
          <p className="h2-content h1-footer">Connect</p>
          <div className="social-media-cont">
            <img src={facebook} alt="logo" />
            <img src={insta} alt="logo" />
            <img src={twitter} alt="logo" />
            <img src={youtube} alt="logo" />
          </div>
          <p>iOS App</p>
          <p>Android</p>
          <p>PS App</p>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="sony-cont">
        <p className="smaller-head-content">SONY interactive entertainment</p>
        <p>© 2025 Sony Interactive Entertainment Europe Limited (SIEE)</p>
        <p>
          All content, games titles, trade names and/or trade dress, trademarks,
          artwork and associated imagery are trademarks copyright material of
          their respective owners. All rights reserved.
        </p>
      </div>
      <hr className="footer-line" />
      <div className="footer-foot">
        <div className="location-cont">
          <img src={globe} alt="logo" />
          <p>India</p>
        </div>
        <p>
          Legal | Privacy policy | Website terms of use | Site Map | Cookies
          Policy | Software Usage Terms
        </p>
      </div>
    </div>
  );
}
