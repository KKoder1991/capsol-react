import React from "react";
import "./DisplayPopUps.css";
import { useState } from "react";
import axios from "axios";

export default function DisplayPopUps() {
  const [eventList, setEventList] = useState([]);

  const getEvents = () => {
    axios.get("http://localhost:3001/events").then((response) => {
      setEventList(response.data);
    });
  };

  const deleteEvent = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEventList(
        eventList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div class="grid-container">
      <ul className="ul">
        {eventList.map((val, key) => {
          return (
            <div className="DisplayEventBox">
              <h3>{val.name}</h3>
              <p>{val.date}</p>
              <p>{val.place}</p>
              <p>{val.description}</p>
              <div className="delete-button">
                <button id="deleteButton" onClick={() => deleteEvent(val.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </ul>
      <button id="EventButton" onClick={getEvents}>
        Events
      </button>
    </div>
  );
}
