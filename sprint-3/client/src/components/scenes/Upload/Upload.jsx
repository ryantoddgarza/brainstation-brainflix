import React, { Component } from 'react';
import axios from 'axios';
import Success from '../Success/Success';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      errors: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!e.target.title.value || !e.target.description.value) {
      this.setState({ errors: true });
      return;
    }

    axios.post('/videos', {
      title: e.target.title.value,
      description: e.target.description.value,
      image: "/images/upload-video-preview.jpg"
    });

    this.setState({ submitted: true });
  }

  render() {
    if (this.state.submitted) {
      return (
        <Success />
      );
    }

    let errorMessage;
    if (this.state.errors) {
      errorMessage = <div className="upload__error-message">All fields are required</div>;
    } else {
      errorMessage = null;
    }

    return (
      <div className="upload">
        <main className="container">
          <div className="upload__heading">Upload Video</div>
          <div className="divider upload__divider"></div>
          <div className="upload__main-content">
            <div className="upload__preview">
              <div className="upload__label">Video thumbnail</div>
              <div className="upload__preview-thumbnail">
              <img src="/images/upload-video-preview.jpg" alt="" />
              </div>
            </div>
            <form id="uploadForm"
                  className="upload__form"
                  onSubmit={this.handleSubmit}>
              <label className="upload__label" htmlFor="title">Title your video</label>
              <input id="title"
                     className="input upload__form-input"
                     type="text"
                     placeholder="Add a title to your video" />
              <label className="upload__label" htmlFor="description">Add a video description</label>
              <textarea id="description"
                        className="textarea upload__form-textarea"
                        placeholder="Add a description of your video">
              </textarea>
              <div className="divider upload__divider"></div>
              <div className="upload__form-controls">
                <button className="cta upload__submit-button">Publish</button>
                <div className="upload__cancel-button"
                     onClick={() => this.props.history.push('/')}>Cancel
                </div>
              </div>
              <div>{errorMessage}</div>
            </form>
          </div>
        </main>
      </div>
    )
  }
}

export default Upload;

