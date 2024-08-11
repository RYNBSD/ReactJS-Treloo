export default function RecommendedCard({ img, place, star, title }) {
  return (
    <div className="recommendedCard">
      <div className="recommendedCard__img">
        <img src={img} />
        <div className="recommendedCard__img-star f-center">
          <box-icon type="solid" color="yellow" name="star"></box-icon>
          {star}
        </div>
      </div>
      <div className="recommendedCard__desc">
        <h1>{title}</h1>
        <div className="recommendedCard__desc-place">
          <box-icon name="location-plus" type="solid" color="red"></box-icon>
          {place}
        </div>
      </div>
    </div>
  );
}
