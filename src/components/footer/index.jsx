import Jado from "../../assets/jado.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";

import "./style.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__avatar">
        <img src={Jado} className="footer__image" alt="" />
        <p className="footer__book">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div className="footer__section">
        <div className="footer__title">Company</div>
        <li className="footer__list">About</li>
        <li lassName="footer__list">Careers</li>
        <li lassName="footer__list">Mobile</li>
      </div>

      <div className="footer__section">
        <div className="footer__title">Company</div>
        <li lassName="footer__list">About</li>
        <li lassName="footer__list">Careers</li>
        <li lassName="footer__list">Mobile</li>
      </div>
      <div className="footer__section">
        <div className="footer__title">More</div>
        <li lassName="footer__list">Airlinefees</li>
        <li lassName="footer__list">Airline</li>
        <li lassName="footer__list">Low fare tips</li>
      </div>

      <div className="footer__app">
        <div className="footer__social">
          <div className="footer__facebook">
            <img src={Facebook} className="" alt="" />
          </div>
          <div className="footer__instagram">
            <img src={Instagram} className="" alt="" />
          </div>
          <div className="footer__twitter">
            <img src={Twitter} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
