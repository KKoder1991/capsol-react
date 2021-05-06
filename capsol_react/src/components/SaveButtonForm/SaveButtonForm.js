import React from 'react';
import './SaveButtonForm.css';
import addEvent from 

export default class SaveButtonForm extends React.Component{
    render(){
        return(
            <button id="SaveButton" onClick={addEvent} >Save</button>
        );
    };
}