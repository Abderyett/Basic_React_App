import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import Alert from './Alert';

const App = () => {
  const [item, setItem] = useState('');
  const [grocery, setGrocery] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const submitHandler = (e) => {
    e.preventDefault();
    if (!item) {
      // Show an Alert
    } else if (item && isEditing) {
      // deal with edit
    } else {
      const newItem = { id: uuidv4(), title: item };
      setGrocery([...grocery, newItem]);
      setItem('');
    }
  };
  const deleteHandler = (id) => {
    const newGrocery = grocery.filter((el) => el.id !== id);
    setGrocery(newGrocery);
  };
  return (
    <section className="section-center">
      {alert.show && <Alert />}
      <form className="grocery-form" onSubmit={submitHandler}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg.eggs"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="button" className="submit-btn">
            {isEditing ? 'editing' : 'submit'}
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
