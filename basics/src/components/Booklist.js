import React from 'react';
import Book from './Book';
import { books } from './books';

const Booklist = () => (
  <>
    {books.map((book) => {
      const { id, img, title, author } = book;
      return <Book key={id} img={img} title={title} author={author} />;
    })}
  </>
);

export default Booklist;
