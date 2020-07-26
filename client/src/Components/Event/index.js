import React from "react";
import { useDispatch } from "react-redux";
import { iWillCome } from "../../redux/actions";
import "./style.css";
import { Link, useParams } from "react-router-dom";

export default ({ date, description, img, title, tag, _id, favorites }) => {
  const id = useParams().id;
  const match = id === _id ? " match" : "";
  const favorite = favorites === "true" ? "favorite" : "";
  const dispatch = useDispatch();
  const tags = [];
  for (const [index, value] of Object.entries(tag)) {
    index === "price"
      ? tags.push(
          <p className="item-tag" key={index}>
            {index} | {value}
            {" рублей"}
          </p>
        )
      : tags.push(
          <p className="item-tag" key={index}>
            {index} | {value}
          </p>
        );
  }
  return (
    <div className={favorite + " card " + match}>
      <img src={img} alt="" />
      <div className="card--header">
        <Link to={`/${_id}`}>{title}</Link>
        <p className="date">{date}</p>
      </div>
      <p className="item-description">{description}</p>

      <h5>Метки</h5>
      <div className="card--tags">
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
};
