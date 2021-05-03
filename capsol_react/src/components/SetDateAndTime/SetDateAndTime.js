import './SetDateAndTime.css';

import React from 'react';

export default class SetDateAndTime extends React.Component{
    render(){
        return(
            <div className="SetDateAndTime">
                <div className="DateAndTimeHeading">
                    <p>Date & Time</p>
                </div>
                <div className="SetDateAndTimeButtons">
                     <button>D&T</button>
                     <button>+</button>
                </div>
            </div>
          

        )
    }
}