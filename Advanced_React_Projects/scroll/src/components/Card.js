import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rounded, color } from '../utilities';

function Card({ photo }) {
  const { likes, portfolioUrl, name, profileImage, url } = photo;

  return (
    <CardWrapper>
      <Image src={url} alt="surface" />

      <Article>
        <InfoWrapper>
          <h4>{name}</h4>
          <h5>{likes} Likes</h5>
        </InfoWrapper>

        <InfoImage href={portfolioUrl}>
          <img src={profileImage} alt="author" />
        </InfoImage>
      </Article>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  position: relative;
`;

const Article = styled.article`
  background: rgba(0, 0, 0, 0.3);
  color: ${color.white};
  height: 5rem;
  width: 40rem;
  position: absolute;
  bottom: 1.5px;
  left: 0;
  border-bottom-left-radius: ${rounded.md};
  border-bottom-right-radius: ${rounded.md};
  visibility: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    visibility: visible;
  }
`;
const Image = styled.img`
  width: 40rem;
  height: 25rem;
  object-fit: cover;
  border-radius: ${rounded.md};
  &:hover ~ ${Article} {
    visibility: visible;
  }
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  line-height: 1.5rem;
  font-size: 1.25rem;
`;

const InfoImage = styled.a`
  img {
    padding: 0.25rem;
    width: 3rem;
    height: 3rem;
    border-radius: ${rounded.full};
    background: ${color.white};
    margin-right: 2rem;
    cursor: pointer;
  }
`;
Card.propTypes = PropTypes.object.isRequired;

export default Card;
