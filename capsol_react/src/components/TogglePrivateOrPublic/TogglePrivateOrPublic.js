import React from 'react';

import '../TogglePrivateOrPublic/TogglePrivateOrPublic.css';

export default class TogglePrivateOrPublic extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isPrivate: false,
            }
        }

    ToggleButton(){
        this.setState((currentState) => ({
        IsPrivate: !currentState.IsPrivate,
            }));
    }
    
    render(){
        return (
            <div className="TogglePrivateOrPublic">
                <label class="switch">
                    <input type="checkbox" onClick={ () => this.ToggleButton() }></input>
                    <span class="slider round"></span>
                </label>
                <div className="TogglePrivate">
                </div>
                {this.state.IsPrivate && this.props.text}
            </div>
            );
    }
}