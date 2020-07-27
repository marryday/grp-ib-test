import React from "react";
import { useDispatch } from "react-redux";
import { iWillCome } from "../../redux/actions";
import "./style.css";
import { Link, useParams } from "react-router-dom";

export default React.memo(({ date, description, img, title, tag, _id, favorites }) => {
  console.log('sd')
  const id = useParams().id;
  const match = id === _id ? " card_match" : "";
  const favorite = favorites === "true" ? "card_active" : "";
  const dispatch = useDispatch();
  const tags = [];
  for (const [index, value] of Object.entries(tag)) {
    index === "price"
      ? tags.push(
          <p className="card__tags__item" key={index}>
            {index} | {value}
            {" рублей"}
          </p>
        )
      : tags.push(
          <p className="card__tags__item" key={index}>
            {index} | {value}
          </p>
        );
  }
  return (
    <div className={favorite + " card " + match}>
      <img src={img} alt="" />
      <div className="card__header">
        <Link to={`/${_id}`}>{title}</Link>
        <p className="card__date">{date}</p>
      </div>
      <p className="card__description">{description}</p>

      <h5>Метки</h5>
      <div className="card__tags">
        {tags.map((el, index) => {
          if (index !== 0 && index !== tags.length - 1) return el;
        })}
      </div>
      <button
        className="addToFavorites"
        onClick={(e) => dispatch(iWillCome(_id))}
      >
        Иду!
      </button>
    </div>
  );
});
