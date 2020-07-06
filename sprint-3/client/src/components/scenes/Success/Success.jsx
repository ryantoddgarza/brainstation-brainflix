import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="success">
      <main className="container">
        <div className="success__message">
          <div>Your video has been successfully uploaded. Return <Link to="/">home</Link></div>
        </div>
    </main>
    </div>
  );
};

export default Success;

