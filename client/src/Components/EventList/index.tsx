import React, { useEffect } from "react";
import Event from "../Event";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadEvents } from "../../redux/actions";
import "./style.css";
import {RootState} from "../../models/Event"


const EventList: React.FC =  () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events);
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

export default EventList;