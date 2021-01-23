import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Just random title');
  const handler = () => {
    if (text === 'Just random title') {
      setText('Hey There!');
    } else {
      setText('Just random title');
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handler}>
        ChangeTitle
      </button>
    </>
  );
};

export default UseStateBasics;
