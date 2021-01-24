import React from 'react';
import Review from './Review';

const App = () => (
  <main>
    <section className="container">
      <div className="title">
        <h2>Our Review</h2>
        <div className="underline" />
      </div>
      <Review />
    </section>
  </main>
);

export default App;
