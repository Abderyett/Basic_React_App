import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        people: [...state.people, action.payload],
        showModal: true,
        modelContent: 'item add',
      };
    case 'NO_VALUE':
      return { ...state, showModal: true, modelContent: 'please enter value' };
    case 'REMOVE':
      return {
        ...state,
        people: state.people.filter((el) => el.id !== action.payload),
        showModal: true,
        modelContent: 'removed item',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
      };

    default:
      return state;
  }
};

const initialState = {
  people: [],
  showModal: false,
  modelContent: '',
};

const Index = () => {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!text) {
      dispatch({ type: 'NO_VALUE' });
    } else {
      const newItem = { id: uuidv4(), title: text };
      dispatch({ type: 'ADD', payload: newItem });
      setText('');
    }
  };

  return (
    <>
      {state.showModal && <Modal closeModal={closeModal} modelContent={state.modelContent} />}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>

        <button type="submit">add</button>
      </form>
      <article>
        {state.people.map((el) => (
          <div className="item" key={el.id}>
            <h4>{el.title}</h4>
            <button type="submit" onClick={() => dispatch({ type: 'REMOVE', payload: el.id })}>
              remove
            </button>
          </div>
        ))}
      </article>
    </>
  );
};

export default Index;
