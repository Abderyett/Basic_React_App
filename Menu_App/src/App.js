import React from 'react';

import Categories from './Categories';

const App = () => (
  <>
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <Categories />
      </section>
    </main>
  </>
);

export default App;
