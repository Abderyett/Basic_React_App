/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useGlobalContext } from '../context';

function CradList() {
  const { photos } = useGlobalContext();

  return (
    <StyledCardList>
      {photos.map((photo) => {
        const { id, likes } = photo;
        const { portfolio_url: portfolioUrl, name } = photo.user;
        const { medium: profileImage } = photo.user.profile_image;
        const { regular: url } = photo.urls;

        const newPhoto = {
          likes,
          portfolioUrl,
          name,
          profileImage,
          url,
        };

        return <Card key={id} photo={{ ...newPhoto }} />;
      })}
    </StyledCardList>
  );
}

const StyledCardList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 40rem);
  grid-auto-rows: 25rem;
  grid-gap: 2rem;
`;

export default CradList;
