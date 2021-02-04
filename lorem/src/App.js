/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import data from './data';

const App = () => {
  const [lorem, setLorem] = useState([]);
  const [count, setCount] = useState(0);

  const changerHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count >= 8) {
      amount = 8;
    }
    setLorem(data.slice(0, amount));
  };

  return (
    <>
      <section className="section-center">
        <h3>Tired of boring lorem ipsem</h3>
        <form className="lorem-form">
          <label htmlFor="paragraph">Paragraph:</label>

          <input type="number" id="paragraph" name="number" onChange={(e) => setCount(e.target.value)} value={count} />

          <button type="submit" className="btn" onClick={changerHandler}>
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {lorem.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </article>
      </section>
    </>
  );
};

export default App;
