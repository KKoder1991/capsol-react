import React from "react";
import "./DisplayPopUps.css";
import { useState } from 'react';
import axios from 'axios';

export default function DisplayPopUps (){

  const [ eventList, setEventList ] = useState([]);

  const getEvents = () => {
    axios.get('http://localhost:3000/events').then((response) => {
      console.log(response);
    });
  };
    return (
      <div class="grid-container">
        <div className="container-1">
            <header></header>
        </div>
        <button onClick={getEvents} >Events</button>
        <div className="container-1">
            <ul>
                {["420 pop up stream", "Guitar Session/ Mark Makado", "Peruvian Music by Kerridy ensemble", "Lee Borthers and friends playing jazz"]
                .map((events, idx) => { return <li key={idx}>{events}</li>})}
            </ul>
        </div>
      </div>
    );
  }