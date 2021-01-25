import React from 'react';
import Question from './Questions';
import data from './data';

const App = () => (
  <>
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        {data.map((question) => (
          <Question {...question} key={question.id} />
        ))}
      </div>
    </main>
  </>
);

export default App;
