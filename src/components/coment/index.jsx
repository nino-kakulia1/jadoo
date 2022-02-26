import "./style.scss";

import Person from "../coment/person";

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

      <Person />
    </div>
  );
}

export default Coment;
