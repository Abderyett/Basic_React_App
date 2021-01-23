import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [person, setPerson] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{`${person.length} Birdthday Today`} </h3>

        <List person={person} />
        <button type="button" onClick={() => setPerson([])}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
