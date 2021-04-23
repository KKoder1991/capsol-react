import React from 'react';
import './app.css';
import logo from '../app/capsol-logo.png';
import TextInput from '../TextInput/TextInput';
import UploadImage from '../UploadImage/UploadImage';
import TogglePrivateOrPublic from '../TogglePrivateOrPublic/TogglePrivateOrPublic';

function App() {
      const [selected, setSelected] = useState(false);
      return (
            <div className="App">
                <div className="capsol-heading">
                    <h1>CapSol Application</h1>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo for capsol"></img>
                </div>
                <div className="TextInput">
                    <TextInput />
                </div>
                <div className="UploadImage">
                    <UploadImage id='UploadImage' />
                </div>
                <div className="TogglePrivateOrPublic">
                    <TogglePrivateOrPublic 
                        selected={selected}
                        toggleSelected={() => {
                            setSelected (!selected);
                        }}
                    />
                </div>
            </div>
        );
    }

export default App;
