/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import Articles from './Articles';
import { useGlobalContext } from '../context.js';

function CardList() {
  const { news } = useGlobalContext();

  return (
    <Wrapper>
      {news.map((el) => {
        const { title, num_comments, points, url, objectID } = el;

        return (
          <Articles key={objectID} title={title} comments={num_comments} points={points} url={url} id={objectID} />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 570px);
  grid-auto-rows: 10rem;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  margin-top: 10rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 350px);
  }
`;

export default CardList;
