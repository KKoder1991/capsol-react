import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
    render(){
        return(
            <input
                placeholder= "What's popping up?"
            />
        );
    }
}

export default TextInput;