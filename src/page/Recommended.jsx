import { RecommendedCard } from "../components";
import { recommendedDestination } from "../data";
import "./css/Recommended.css";

export default function Recommended() {
  return (
    <div className="recommended">
      <div className="title">
        <h1>Recommended Destination</h1>
      </div>
      <center>
        <div className="section-title">
          <button type="button">Popularity</button>
          <button type="button">Adventure</button>
          <button type="button">Beach</button>
        </div>
      </center>
      <div className="container f-center">
        {recommendedDestination.map((reco, index) => (
          <RecommendedCard key={index} {...reco} />
        ))}
      </div>
    </div>
  );
}
