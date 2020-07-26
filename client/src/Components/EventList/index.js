import React, { useEffect } from "react";
import Event from "../Event";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadEvents } from "../../redux/actions";
import "./style.css";
export default () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  useEffect(() => {
    async function fetchData() {
      dispatch(loadEvents());
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="events-list">
      {events &&
        events.map((event) => <Event key={event._id} {...event}></Event>)}
    </div>
  );
};
