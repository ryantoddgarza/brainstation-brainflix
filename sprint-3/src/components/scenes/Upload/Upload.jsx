import React from 'react';

const Upload = () => {
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
          <form className="upload__form" action="">
            <div className="upload__label">Title your video</div>
            <input className="input upload__form-input"
              type=""
            placeholder="Add a title to your video" />
            <div className="upload__label">Add a video description</div>
            <textarea className="textarea upload__form-textarea"
              name=""
            placeholder="Add a description of your video"></textarea>
            <div className="divider upload__divider"></div>
            <div className="upload__form-controls">
              <button className="cta upload__submit-button">Publish</button>
              <div className="upload__cancel-button">Cancel</div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Upload;

