import './Duration.css';

import React from 'react';

export default class Duration extends React.Component{
    render(){
        return(
            <div className="Duration">
                  <p>Duration</p>
                  <div className="buttons">
                        <div id="button-1">
                                <button></button>
                        </div>
                        <div id="button-2">
                                <button></button>
                        </div>
                        <div id="button-3">
                                <button></button>
                        </div>
                  </div>          
            </div>
          

        )
    }
}