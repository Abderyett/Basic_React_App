import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error">
      <h1>The page you are looking for is not available</h1>
      <button type="button" className="btn">
        <Link to="/">Back Home</Link>
      </button>
    </div>
  );
}

export default Error;
