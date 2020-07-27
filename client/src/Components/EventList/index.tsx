import React, { useEffect } from "react";
import Event from "../Event";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadEvents } from "../../redux/actions";
import "./style.css";

type Tag  = {
  ageLimit: string,
  duration: string,
  price: number,
  location: string,
}

type Events ={
  _id: string,
  title: string,
  date: string,
  description: string,
  img: string,
  tag: Tag
  favorites: ['true', 'false']
}

interface RootState {
  loading: boolean,
  events: Array<Events>,
}

export default () => {
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
