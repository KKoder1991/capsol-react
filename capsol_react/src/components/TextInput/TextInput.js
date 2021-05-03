import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
    render(){
        return(
            <div className="ClassTextInput">
                <input 
                    id="TextInput"
                    placeholder="What's popping up?"
                 />
            </div>
        );
    }
}

export default TextInput;