import React from 'react';
import './DisplayInputFields.css';
import SetDateAndTime from '../SetDateAndTime/SetDateAndTime.js';
import TextInput from '../TextInput/TextInput.js';
import UploadImage from '../UploadImage/UploadImage';
import SaveButtonForm from '../SaveButtonForm/SaveButtonForm.js';
import CancelButtonForm from '../CancelButtonForm/CancelButtonForm';

export default class DisplayInputFields extends React.Component{
    render(){
        return(
            <div className="DisplayInputFields">
            <div className="SetDateAndTime">
                <SetDateAndTime />
            </div>
            <div className="EventName">
                <label>What's popping up?</label>
                <TextInput />
            </div>
            <div className="Where">
                <label>Where?</label>
                <TextInput />
            </div>
            <div className="UploadImage">
                <UploadImage />
            </div>
            <div className="TellUsMore">
                <label>Tell Us More</label>
                <TextInput />
            </div>
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