import "./style.scss";
import romeImg from "../../assets/rome.jpg";
import londonImg from "../../assets/london.jpg";
import EuropeImg from "../../assets/europe.jpg";
import Card from "../destination/card";

function Destination() {
  return (
    <div className="destination ">
      <span className="destination__subtitle">Top Selling</span>
      <h1 className="destination__title">Top Destinations</h1>
      <div className="destination__cards">
        <Card
          imageUrl={romeImg}
          price={"5,42k"}
          location={"Rome, Italty"}
          duration={"10 Days Trip"}
        />
        <Card
          imageUrl={londonImg}
          price={"4.2k"}
          location={"London, UK"}
          duration={"12 Days Trip"}
        />
        <Card
          imageUrl={EuropeImg}
          price={"15k"}
          location={"Full Europe"}
          duration={"28 Days Trip"}
        />
      </div>
    </div>
  );
}
export default Destination;
