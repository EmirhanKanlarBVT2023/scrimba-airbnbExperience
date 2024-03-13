// import katieZaferes from "./katie_zaferes.png";
import star from "./images/star.png";

function Card(props) {
  let badgeText;
  if (props.Item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.Item.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={props.Item.coverImg}
        alt="Katie Zaferes"
        className="card--image"
      />
      <div className="card--stats">
        <img src={star} alt="star icon" className="card--star" />
        <span>{props.Item.stats.rating}</span>
        <span className="gray">({props.Item.stats.reviewCount}) • </span>
        <span className="gray">{props.Item.location}</span>
      </div>
      <h2 className="card--title">{props.Item.title}</h2>
      <p className="card--price">
        <strong>From ${props.Item.price}</strong> / person
      </p>
    </div>
  );
}

export default Card;
