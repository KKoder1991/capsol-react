import "../Tags/Tags.css";
import React from "react";

export default class Tags extends React.Component {
  constructor() {
    super();
    
    this.state = {
      tags: []
    };
  }
  
  removeTag = (i) => {
    const newTags = [ ...this.state.tags ];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }

  inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val]});
      this.tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="TagContainer">
        <div className="ContainerHeading">
            <h1>Tags</h1>
        </div>
        <div className="TagInputAndRemoveButton">
            <div className="TagInput">
              <input type="text" placeholder='Add tag here' onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} />
            </div>
            <div className="TagAndTagDelete">
                { tags.map((tag, i) => (
                    <button key={tag} type="button" onClick={() => { this.removeTag(i); }}>{tag}</button>
               ))}
            </div>
          </div>
        </div>

    );
  }
}