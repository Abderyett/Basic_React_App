import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <h2>show/hide</h2>
      <button className="btn" type="button" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: '4rem' }}>
      <h1>Window</h1>
      <h1>Size :{size} Px</h1>
    </div>
  );
};

export default ShowHide;
