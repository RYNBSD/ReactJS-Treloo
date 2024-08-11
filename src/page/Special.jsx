import { SpecialCard } from "../components";
import { specialsUpcomingOffers } from "../data";

import "./css/Special.css";

export default function Special() {
  return (
    <div className="special">
      <div className="title">
        <h1>Special Upcoming Offers</h1>
      </div>
      <center>
        <div className="section-title">
          <button type="button">Team</button>
          <button type="button">Couple</button>
          <button type="button">Family</button>
        </div>
      </center>
      <div className="container f-center">
        <div className="d-grid">
          {specialsUpcomingOffers.map((special) => (
            <SpecialCard key={special.title} {...special} />
          ))}
        </div>
      </div>
    </div>
  );
}
