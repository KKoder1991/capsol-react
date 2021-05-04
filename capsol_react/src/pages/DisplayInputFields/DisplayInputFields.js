import React from "react";
import "./DisplayInputFields.css";
import SetDateAndTime from "../../components/SetDateAndTime/SetDateAndTime.js";
import TextInput from "../../components/TextInput/TextInput.js";
import UploadImage from "../../components/UploadImage/UploadImage";
import SaveButtonForm from "../../components/SaveButtonForm/SaveButtonForm.js";
import CancelButtonForm from "../../components/CancelButtonForm/CancelButtonForm";

export default class DisplayInputFields extends React.Component {
  render() {
    return (
      <div className="DisplayInputFields">
        <form>
          <div className="SetDateAndTime">
            <label>Set the Date and Time</label>
            <SetDateAndTime id="SetDateAndTime" />
          </div>
          <div className="EventName">
            <label>What's popping up?</label>
            <input placeholder="Describe your pop up"></input>
          </div>
          <div className="Where">
            <label>Where?</label>
            <br></br>
            <input placeholder="Tell us where it is"></input>
          </div>
          <div className="UploadImage">
            <label>Upload a Cover photo</label>
            <UploadImage />
          </div>
          <div className="TellUsMore">
            <label>Tell Us More</label>
            <br></br>
            <input  type="textarea" placeholder="Anything more to tell us about your pop up?"></input>
          </div>
        </form>
        <div className="FormButtons">
          <div className="SaveButtonForm">
            <SaveButtonForm />
          </div>
          <div className="CancelButtonForm">
            <CancelButtonForm />
          </div>
        </div>
      </div>
    );
  }
}
