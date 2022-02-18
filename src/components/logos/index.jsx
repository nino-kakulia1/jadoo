import Axon from "../../assets/axon.png";
import Jesta from "../../assets/jesta.png";
import Expadia from "../../assets/expadia.png";
import Cantas from "../../assets/cantas.png";
import Alitalia from "../../assets/alitalia.png";

import "./style.scss";

function Logos() {
  return (
    <div className="logos">
      <img src={Axon} className="logos__logo" alt="" />
      <img src={Jesta} className="logos__logo" alt="" />
      <img src={Expadia} className="logos__logo" alt="" />
      <img src={Cantas} className="logos__logo" alt="" />
      <img src={Alitalia} className="logos__logo" alt="" />
    </div>
  );
}

export default Logos;
