import React from 'react';
import Card from './Card';
import { useGlobalContext } from './context';

function CardList() {
  const { loading, setFirst, setSecond, first, second } = useGlobalContext();
  const pageHandler = (e) => {
    if (e.target.textContent === '1') {
      setFirst(0);
      setSecond(parseInt(`${e.target.textContent}0`));
    }
    if (e.target.textContent === '2') {
      setFirst(10);
      setSecond(parseInt(`${e.target.textContent}0`));
    }
    if (e.target.textContent === 'Next') {
      setFirst(first + 10);
      setSecond(second + 10);
      if (second >= 100) {
        setFirst(90);
        setSecond(100);
      }
    }
    if (e.target.textContent === 'Prev') {
      setFirst(first - 10);
      setSecond(second - 10);
      if (first <= 0) {
        setFirst(0);
        setSecond(10);
      }
    }
    if (e.target.textContent !== 'Prev' && e.target.textContent !== 'Next') {
      setSecond(parseInt(`${e.target.textContent}0`));
      setFirst(parseInt(`${e.target.textContent}0`) - 10);
    }
  };
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className="underline" />
        <Card />
      </div>
      <div className="pages">
        <button type="button" className="prev" onClick={pageHandler}>
          Prev
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          1
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          2
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          3
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          4
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          5
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          6
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          7
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          8
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          9
        </button>
        <button type="button" className="btn-page" onClick={pageHandler}>
          10
        </button>
        <button type="button" className="next" onClick={pageHandler}>
          Next
        </button>
      </div>
    </section>
  );
}

export default CardList;
