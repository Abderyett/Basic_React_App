import React from 'react';

const App = () => (
  <div className="container">
    <h1 className="title">Pagination</h1>
    <div className="underline" />
    <div className="card-container">
      <div className="card">
        <img src="https://avatars.githubusercontent.com/u/41592616?v=4" alt="userdk" />
        <div className="card-footer">
          <h3>Username</h3>
          <button type="button" className="btn">
            <a href="https://google.fr"> View Profile</a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default App;
