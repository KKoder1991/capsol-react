import React from "react";
import "./DisplayPopUps.css";
import { useState } from 'react';
import axios from 'axios';

export default function DisplayPopUps (){

  const [ eventList, setEventList ] = useState([]);

  const getEvents = () => {
    axios.get('http://localhost:3001/events').then((response) => {
      setEventList(response.data)
    });
  };
    return (
      <div class="grid-container">
        <div className="container-1">
            <header>Events</header>
        </div>
            <button id="EventButton" onClick={getEvents} >Events</button>
            <ul className="container-1">
                {eventList.map((val, key) => {
                    return <div className="DisplayEventBox">
                      <h3>{val.name}</h3>
                      <p>{val.date}</p>
                      </div>
                })}
            </ul>
        </div>
    );
  }