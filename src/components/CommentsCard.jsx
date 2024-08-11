export default function CommentsCard({ img, title, desc, star, author }) {
  return (
    <div className="commentsCard">
      <div className="doubleQuotes" />
      <p>{desc}</p>
      <h3>{author}</h3>
      <h2>{title}</h2>
      <div className="commentsCard__img">
        <img src={img} />
        <div className="commentsCard__img-star">
          <box-icon color="yellow" name="star" type="solid"></box-icon>
          {star}
        </div>
      </div>
    </div>
  );
}
