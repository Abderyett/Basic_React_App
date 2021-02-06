import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';

const App = () => {
  const [item, setItem] = useState('');
  const [grocery, setGrocery] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setGrocery((prevState) => [...prevState, item]);
    setItem('');
  };
  const deleteHandler = (index) => {
    const newGrocery = grocery.filter((el) => el.index !== index);
    setGrocery(newGrocery);
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg.eggs"
            name="tittle"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="button" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <div className="grocery-list">
          <List grocery={grocery} deleteHandler={deleteHandler} />
          <button type="button" className="clear-btn" onClick={() => setGrocery([])}>
            clear items
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
