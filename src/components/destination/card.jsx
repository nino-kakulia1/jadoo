import "./style.scss";
import locationIcon from "../../assets/navigation.png";

function Card(props) {
  return (
    <div
      className="destination-card"
      style={{ backgroundImage: "url(" + props.imageUrl + ")" }}
    >
      <div className="destination-card__description">
        <div className="destination-card__wraper">
          <span className="destination-card__location">{props.location}</span>
          <div className="destination-card__price">${props.price}</div>
        </div>
        <div className="destination-card__navigation">
          <img
            src={locationIcon}
            className="destination-card__location-icon"
            alt=""
          />
          <span className="destination-card__duration">{props.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
