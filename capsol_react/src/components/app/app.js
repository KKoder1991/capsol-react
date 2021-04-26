import React from 'react';
import './app.css';
import logo from '../app/capsol-logo.png';
import TextInput from '../TextInput/TextInput';
import UploadImage from '../UploadImage/UploadImage';
import TogglePrivateOrPublic from '../TogglePrivateOrPublic/TogglePrivateOrPublic';
import ParagraphInput from '../ParagraphInput/ParagraphInput';
import SetDateAndTime from '../SetDateAndTime/SetDateAndTime';
import Duration from '../Duration/Duration';

export default class App extends React.Component {
      render() {
          return (
            <div className="App">
                <div className="logo">
                    <img src={logo} alt="logo for capsol"></img>
                </div>
                <div className="TextInput">
                    <TextInput />
                </div>
                <div className="Duration">
                    <Duration />
                </div>
                <div className="SetDateAndTime">
                    <SetDateAndTime />
                </div>
                <div className="UploadImage">
                    <UploadImage id='UploadImage' />
                </div>
                <div className="TogglePrivateOrPublic">
                    <TogglePrivateOrPublic text="Private"  />
                </div>
                <div className="ParagraphInput">
                    <ParagraphInput />
                </div>
            </div>
        )
    }
}