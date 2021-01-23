import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <>
      {people.map((el) => {
        const { id, name } = el;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button type="button" className="btn" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
      <button type="button" className="btn" onClick={() => setPeople(data)}>
        Go Back
      </button>
    </>
  );
};

export default UseStateArray;
