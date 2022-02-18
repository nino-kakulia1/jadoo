import "./style.scss";

import Portrat from "../../assets/portrat.png";
import Arrows from "../../assets/arrows.svg";

function Coment() {
  return (
    <div className="coment-section">
      <div className="about">
        <div className="about__title"> Testimonials</div>
        <h1 className="about__subtitle">What people say about Us.</h1>
        <div className="information__choose">
          <div className="information__circule"></div>
          <div className="information__circule"></div>
          <div className="information__circule"></div>
        </div>
      </div>

      <div className="person-coment">
        <img src={Portrat} className="portrat" alt="" />
        <div className="portrat__description">
          <p className="portrat__sense">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <div className="portrat__name">Mike taylor</div>
          <div className="portrat__city">Lahore, Pakistan</div>
        </div>
        <div className="portrat__border">
          <div className="portrat__addname">Chris Thomas</div>
          <div className="portrat__surname">CEO of Red Button</div>
        </div>
        <img src={Arrows} className="portrat__arrows" alt="" />
      </div>
    </div>
  );
}

export default Coment;
