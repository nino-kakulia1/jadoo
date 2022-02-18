import Pin from "../../assets/pin.svg";
import Message from "../../assets/message.svg";

import "./style.scss";

function Subscribe() {
  return (
    <div className="subscribe">
      <h1 className="subscribe__title">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </h1>
      <div className="subscribe__wraper">
        <div className="subscribe__input">
          <img src={Message} className="subscribe__icon" alt="" />
          <input
            type="text"
            className="subscribe__email"
            placeholder="Your email"
          />
        </div>
        <div className="subscribe__click">
          <div className="subscribe__clickon">Subscribe</div>
        </div>
      </div>
      <div className="subscribe__pin">
        <img src={Pin} className="" alt="" />
      </div>
    </div>
  );
}

export default Subscribe;
