import "./style.scss";
import Play from "../../assets/Play.png";
import Traveller from "../../assets/Traveller.png";
import Polygon from "../../assets/Polygon.svg";

function HomePage() {
  return (
    <div className="hero-content">
      <div className="information">
        <span className="subtitle">Best Destinations around the world</span>
        <h1 className="title">Travel, enjoy and live a new and full life</h1>
        <p className="description">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="button-section">
          <a className="button-click" href="">
            <span>Find out more</span>
          </a>
          <div className="play">
            <img src={Polygon} className="" alt="" />
          </div>
          <div className="play__list">Play Demo</div>
        </div>
      </div>

      <div className="left-image">
        <img src={Traveller} className="play-icon" alt="" />
      </div>
    </div>
  );
}
export default HomePage;
