import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, text, name } = people[index];
  console.log(index);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const RandomNum = () => {
    const random = Math.floor(Math.random() * people.length);
    setIndex(random);
  };

  const nextPerson = () =>
    setIndex((prevState) => {
      const newIndex = prevState + 1;

      return checkNumber(newIndex);
    });

  const prevPerson = () =>
    setIndex((prevState) => {
      const newIndex = prevState - 1;

      return checkNumber(newIndex);
    });

  return (
    <>
      <article className="review" key={id}>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <div className="job">{job}</div>
        <p className="info"> {text}</p>
        <div className="button-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" type="button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button type="button" className="random-btn" onClick={RandomNum}>
          suprise me
        </button>
      </article>
    </>
  );
};

export default Review;
