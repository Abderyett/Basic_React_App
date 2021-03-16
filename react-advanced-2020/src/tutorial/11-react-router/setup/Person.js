import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../../data';

const Person = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, [id]);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Person;
