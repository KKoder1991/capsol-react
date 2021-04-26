import '../UploadImage/UploadImage.css';
import React from 'react';

export default class UploadImage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <label for="file-upload" class="custom-file-upload">
          <i className="fa fa-cloud-upload">
              <input id="file-upload" type="file" onChange={this.handleChange}/>
              <img src={this.state.file} alt='' />
          </i>
        </label>
      </div>
    );
  }
}