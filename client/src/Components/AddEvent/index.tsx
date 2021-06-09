import React from "react";
import { addEvent } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  return (
    <button className="button-add" onClick={() => dispatch(addEvent())}>
      Добавить!
    </button>
  );
};
