import './Duration.css';

import React from 'react';

export default class Duration extends React.Component{
    render(){
        return(
            <div className="Duration">
                <div className="DurationHeading">
                    <p>Duration</p>
                </div>
                  <div className="DurationButtons">
                        <div id="DurationButton-1">
                                <button>3hr</button>
                        </div>
                        <div id="DurationButton-2">
                                <button>6hr</button>
                        </div>
                        <div id="DurationButton-3">
                                <button>9hr</button>
                        </div>
                  </div>          
            </div>
          

        )
    }
}