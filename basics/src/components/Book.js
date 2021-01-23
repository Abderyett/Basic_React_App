import React from 'react';
import { PropTypes } from 'prop-types';

import Image from './Image';
import Title from './Title';
import Author from './Author';

const Book = ({ img, author, title }) => (
  <article
    className="book"
    onFocus={() => null}
    onMouseOver={() => {
      console.log(title);
    }}
  >
    <Image img={img} />
    <Title title={title} />
    <Author author={author} />
  </article>
);

Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};
export default Book;
