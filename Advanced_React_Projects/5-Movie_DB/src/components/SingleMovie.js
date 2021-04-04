import React, { useState, useEffect } from 'react';
import { link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const imgUrl = 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/';
export function SingleMovie() {
  const [singleMovie, setSingleMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  const fetchDetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(detailUrl);
      setSingleMovie(data);
      setLoading(false);
      console.log(singleMovie);
    } catch (error) {
      console.log('Oh no there is an Error', error);
    }
  };
  useEffect(() => {
    fetchDetails(id);
  }, []);
  const { backdrop_path: backdrop, genres, title, overview, vote_average: vote } = singleMovie;

  return (
    <StyledContainer backdrop={backdrop}>
      <DetailsContainer />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background: ${(props) => `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.backdrop})`};
  background-repeat: no-repeat;
  background-size: cover;
  filter: sepia(90%) hue-rotate(170deg) saturate(190%);
`;

const DetailsContainer = styled.div``;
