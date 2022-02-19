import "./style.scss";

import Des from "../../assets/des.png";
import Swim from "../../assets/swim.png";
import Car from "../../assets/car.png";
import Greece from "../../assets/greece.png";
import Leaf from "../../assets/leaf.png";
import Map from "../../assets/map.png";
import Send from "../../assets/send.png";
import Stambul from "../../assets/stambul.png";

import Building from "../../assets/building.png";
import Heart from "../../assets/heart.png";

function Trip() {
  return (
    <div className="trip">
      <div className="trip__wraper">
        <div className="trip__subtitle">Easy and Fast</div>
        <h1 className="trip__title">Book your next trip in 3 easy steps</h1>

        <div className="trip__info">
          <div className="trip__value">
            <img src={Des} className="trip__icon" alt="" />
            <div className="trip__list">
              <div className="trip__destination">Choose Destination</div>
              <p className="trip__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="trip__value">
            <img src={Swim} className="trip__icon" alt="" />
            <div className="trip__list">
              <div className="trip__destination">Choose Destination</div>
              <p className="trip__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="trip__value">
            <img src={Car} className="trip__icon" alt="" />
            <div className="trip__list">
              <div className="trip__destination">Choose Destination</div>
              <p className="trip__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="order">
        <img src={Greece} className="order__image" alt="" />
        <div className="order__title">Trip To Greece</div>
        <div className="order__date">
          <span className="order__date-number">14-29 June</span>
          <span>by Robbin joseph</span>
        </div>
        <div className="order__icons">
          <div className="order__icon">
            <img src={Leaf} className="order__common" alt="" />
          </div>
          <div className="order__icon">
            <img src={Map} className="order__common" alt="" />
          </div>
          <div className="order__icon">
            <img src={Send} className="order__common" alt="" />
          </div>
        </div>
        <div className="apartament">
          <img src={Building} className="apartament__image" alt="" />
          <span className="apartament__Involvement">24 people going</span>
          <a className="apartament__heart" href="">
            <img src={Heart} className="" alt="" />
          </a>
        </div>
      </div>
      <div className="complite">
        <img src={Stambul} className="complite__stambul" alt="" />
        <div className="complite__ongoing">
          <div className="complite__title">Ongoing</div>
          <h3 className="complite__subtitle">Trip to rome</h3>
          <div className="complite__all">
            <span className="complite__procent">40%</span> completed
          </div>
          <div className="Rectangle">
            <div className="Rectangle__up"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
