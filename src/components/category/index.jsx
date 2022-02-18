import "./style.scss";
import satelit from "../../assets/satelit.svg";
import local from "../../assets/local.svg";
import service from "../../assets/service.svg";
import Plane from "../../assets/plane.svg";

function Category() {
  return (
    <div className="category">
      <div className="category__subtitle">CATEGORY</div>
      <h1 className="category__title">We Offer Best Services</h1>
      <div className="category__cards">
        <div className="category__card">
          <img src={satelit} className="category__icons" alt="" />
          <div className="category__list">Calculated Weather </div>
          <p className="category__description">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </div>
        <div className="category__card">
          <img src={Plane} className="category__icons" alt="" />
          <div className="category__list">Best Flights</div>
          <p className="category__description">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
        <div className="category__card">
          <img src={local} className="category__icons" alt="" />
          <div className="category__list">Local Events</div>
          <p className="category__description">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </div>
        <div className="category__card">
          <img src={service} className="category__icons" alt="" />
          <div className="category__list">Customization</div>
          <p className="category__description">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Category;
