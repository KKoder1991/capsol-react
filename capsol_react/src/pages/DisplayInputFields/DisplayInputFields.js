import React from "react";
import { useState } from 'react';
import "./DisplayInputFields.css";
import SetDateAndTime from "../../components/SetDateAndTime/SetDateAndTime.js";
import UploadImage from "../../components/UploadImage/UploadImage";
import axios from "axios";



export default function DisplayInputFields() {

  const [ eventName, setName ] = useState("");
  const [ eventDate, setDate ] = useState("");
  const [ eventLocation, setLocation ] = useState("");
  const [ eventImage, setImage ] = useState("");
  const [ eventDescription, setDescription ] = useState("");

  const addEvent = () => {
      axios.post('http://localhost:3000/create', {
        name: eventName,
        date: eventDate,
        location: eventLocation,
        image: eventImage,
        description: eventDescription,
      }).then(() => {
        console.log("success")
      })
  }

    return (
      <div className="DisplayInputFields">
        <form>
          <div className="SetDateAndTime">
            <label>Set the Date and Time</label>
            <SetDateAndTime id="SetDateAndTime" onChange={(event) => {
              setDate(event.target.value);
            }} />
          </div>
          <div className="EventName">
            <label>What's popping up?</label>
            <input placeholder="Describe your pop up" onChange={(event) => {
              setName(event.target.value);
            }}></input>
          </div>
          <div className="Where">
            <label>Where?</label>
            <br></br>
            <input placeholder="Tell us where it is" onChange={(event) => {
              setLocation(event.target.value);
            }}></input>
          </div>
          <div className="UploadImage">
            <label>Upload a Cover photo</label>
            <UploadImage  onChange={(event) => {
              setImage(event.target.value);
            }}/>
          </div>
          <div className="TellUsMore">
            <label>Tell Us More</label>
            <br></br>
            <input  type="textarea" placeholder="Anything more to tell us about your pop up?"
            onChange={(event) => {
              setDescription(event.target.value);
            }}></input>
          </div>
        </form>
        <div className="FormButtons">
          <div className="SaveButtonForm">
            <button id="SaveButton" onClick={addEvent} >Save</button>
          </div>
          <div className="CancelButtonForm">
            <button id="SaveButton" onClick={addEvent} >Save</button>
          </div>
        </div>
      </div>
    );
  }
