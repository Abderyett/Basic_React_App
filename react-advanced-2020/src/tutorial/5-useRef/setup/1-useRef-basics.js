import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  useEffect(() => {
    console.log(refContainer);
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(refContainer.current);
    console.log(divContainer.current);
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </form>
      <div ref={divContainer}>hello</div>
    </>
  );
};

export default UseRefBasics;
