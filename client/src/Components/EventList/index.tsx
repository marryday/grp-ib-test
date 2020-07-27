import React, { useEffect, useMemo } from "react";
import Event from "../Event";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadEvents } from "../../redux/actions";
import "./style.css";
import { Events, RootState } from "../../models/Event"


const EventList: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events);
  useEffect(() => {
    async function fetchData() {
      dispatch(loadEvents());
    }
    fetchData();
  }, [dispatch]);
  const data = useMemo(() => events.map((event: Events) => <Event key={event._id} {...event}></Event>), [events])
  return (
    <div className="events-list">
      {events && data}
    </div>
  );
};

export default EventList;