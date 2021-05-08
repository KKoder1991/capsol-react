import React from "react";
import { useState } from "react";
import "./DisplayInputFields.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import de from 'date-fns/locale/de';
import "react-datepicker/dist/react-datepicker.css";

export default function DisplayInputFields() {
  const [name, setName] = useState();
  const [date, setDate] = useState(new Date());
  const [place, setLocation] = useState();
  const [description, setDescription] = useState();
  registerLocale('de', de);
  setDefaultLocale('de');

  const addEvent = () => {
    axios
      .post("http://localhost:3001/create", {
        name: name,
        date: date,
        place: place,
        description: description
      })
      .then(() => {
        console.log("success");
      }).catch(() => {
        console.log("error");
      })
  };

  return (
    <div className="DisplayInputFields">
      <form>
        <div className="SetDateAndTime">
          <label>Set the Date and Time</label>
          <DatePicker
            locale="de"
            selected={date}
            onChange={(date, event) => 
                                  setDate(date, event.target.value)
                                 } 
                                />
        </div>
        <div className="EventName">
          <label>What's popping up?</label>
          <input
            placeholder="Describe your pop up"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <div className="Where">
          <label>Where?</label>
          <br></br>
          <input
            placeholder="Tell us where it is"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          ></input>
        </div>
        <div className="TellUsMore">
          <label>Tell Us More</label>
          <br></br>
          <input
            type="textarea"
            placeholder="Anything more to tell us about your pop up?"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </div>
      </form>
      <div className="FormButtons">
        <div className="SaveButtonForm">
          <button id="SaveButton" onClick={addEvent}>
            Save
          </button>
        </div>
        <div className="CancelButtonForm">
          <button id="CancelButton" >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
