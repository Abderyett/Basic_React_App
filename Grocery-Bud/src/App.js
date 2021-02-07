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

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!item) {
      showAlert(true, 'Please enter value', 'danger');
      console.log(alert);
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
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <form className="grocery-form">
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg.eggs"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={submitHandler}>
            {isEditing ? 'editing' : 'submit'}
          </button>
        </div>
      </form>
      {grocery.length > 0 && (
        <div className="grocery-container">
          <div className="grocery-list">
            <List grocery={grocery} deleteHandler={deleteHandler} />
            <button type="button" className="clear-btn" onClick={() => setGrocery([])}>
              clear items
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
