import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    console.log('UseEffect Called');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanUp');
      window.removeEventListener('resize', checkSize);
    };
  });
  return (
    <>
      <h2>Window Width is :</h2>
      <h2>{width} PX</h2>
      <h2>Window Height is :</h2>
      <h2>{height} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
