import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const App = () => {
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextHandler = () => {
    setIndex((PrevState) => {
      const newValue = PrevState + 1;

      return checkNumber(newValue);
    });
  };

  const prevHandler = () => {
    setIndex((PrevState) => {
      const newValue = PrevState - 1;

      return checkNumber(newValue);
    });
  };
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prevState) => {
        const newValue = prevState + 1;

        return checkNumber(newValue);
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {data.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (personIndex === index - 1 || (index === 0 && personIndex === data.length - 1)) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt="" className="person-img" />
                <h4>{name}</h4>
                <p className="title"> {title}</p>
                <p className="text">{quote} </p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}

          <button type="button" className="prev" onClick={prevHandler}>
            <FiChevronLeft />
          </button>
          <button type="button" className="next" onClick={nextHandler}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
