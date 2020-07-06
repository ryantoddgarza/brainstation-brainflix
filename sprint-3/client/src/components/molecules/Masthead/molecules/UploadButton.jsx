import React from 'react';
import IconUpload from '../atoms/IconUpload';

const UploadButton = () => {
  return (
    <button className="masthead__upload-btn cta">
      <IconUpload />
      <span>Upload</span>
    </button>
  );
};

export default UploadButton;

