import '../ParagraphInput/ParagraphInput.css';

import React from 'react';

export default class ParagraphInput extends React.Component{
    render(){
        return(
            <div className="ParagraphInput">
                <textarea  placeholder="Say something about your pop up">
            </textarea>
        </div>
        );
    }
}