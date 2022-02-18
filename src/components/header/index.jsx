import "./style.scss";
import Logo from "../../assets/Logo.svg";
import Vector from "../../assets/Vector.png";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img src={Logo} className="header__logo" alt="" />
      </div>
      <div className="header__middle">
        <ul className="header__navigation">
          <a className="header__item" href="">
            <li>Desitnations</li>
          </a>
          <a className="header__item" href="">
            <li>Hotels</li>
          </a>
          <a className="header__item" href="">
            <li>Flights</li>
          </a>
          <a className="header__item" href="">
            <li>Bookings</li>
          </a>

          <a className="header__item" href="">
            <li>Login</li>
          </a>
        </ul>

        <div className="header__right">
          <a href="">
            <button className="header__button">Sign up</button>
          </a>
          <a className="header__right-dropdown" href="">
            <li className="header__Language">EN</li>
            <img src={Vector} className="header__vector" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
