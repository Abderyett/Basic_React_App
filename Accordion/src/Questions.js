import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Question = ({ info, title }) => {
  const [questions, setQuestions] = useState(false);

  return (
    <>
      <sesction className="info">
        <article className="question">
          <header>
            <h4> {title} </h4>
            <button type="button" className="btn" onClick={() => setQuestions(!questions)}>
              {questions ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </header>
          {questions && <p>{info}</p>}
        </article>
      </sesction>
    </>
  );
};
Question.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
};

export default Question;
