import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('useEffect Been Called');
    if (value > 10) {
      document.title = `You Clicked(${value})`;
    }
  }, [value]);
  console.log('component rendered');

  return (
    <>
      <h2>useEffect Basics</h2>
      <button className="btn" type="button" onClick={() => setValue((prevState) => prevState + 1)}>
        Increment
      </button>
      <h2 style={{ marginTop: '4rem' }}>{value}</h2>
    </>
  );
};

export default UseEffectBasics;
