import React from 'react';
import './DisplayInputFields.css';

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
            {/* Insert add a photo component here */}
            <div className="TellUsMore">
                <label>Tell Us More</label>
                <TextInput />
            </div>
          </div> 
        );
    }
}