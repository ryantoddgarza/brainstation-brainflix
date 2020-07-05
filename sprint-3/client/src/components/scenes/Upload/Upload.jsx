import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {
  handleSubmit(e) {
    e.preventDefault();
    axios.post('/videos', {
      title: e.target.title.value,
      description: e.target.description.value,
      image: "/images/upload-video-preview.jpg"
    })
  }

  handleCancel(e) {
    // e.preventDefault();
    return;
  }

  render() {
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
            <form id="uploadForm" className="upload__form" onSubmit={this.handleSubmit}>
              <label className="upload__label" htmlFor="title">Title your video</label>
              <input id="title" className="input upload__form-input" type="text" placeholder="Add a title to your video" />
              <label className="upload__label" htmlFor="description">Add a video description</label>
              <textarea id="description" className="textarea upload__form-textarea" name="description" placeholder="Add a description of your video"></textarea>
              <div className="divider upload__divider"></div>
              <div className="upload__form-controls">
                <button className="cta upload__submit-button">Publish</button>
                <div className="upload__cancel-button" onClick={this.handleCancel}>Cancel</div>
              </div>
            </form>
          </div>
        </main>
      </div>
    )
  }
}

export default Upload;

