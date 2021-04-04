import React, { useState, useEffect } from 'react';
import { link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { format } from 'date-fns';
import { color, rounded } from '../utilities';

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
  const {
    backdrop_path: backdrop,
    genres,
    title,
    overview,
    vote_average: vote,
    poster_path: poster,
    release_date: releaseDate,
  } = singleMovie;

  return (
    <StyledContainer backdrop={backdrop}>
      <ImageContainer>
        <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster}`} alt={title} />
      </ImageContainer>
      <TextContainer>
        <h1>{title}</h1>
        <h2>
          Genres :{/* {genres.map((el) => (
            <span key={el.id}>{el.name.split(',')}</span>
          ))} */}
        </h2>
      </TextContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100vw;
  height: 483px;
  background: ${(props) => `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.backdrop})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 30rem 40%;
  grid-gap: 2rem;
  padding-left: 30px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;

  /* filter: sepia(90%) hue-rotate(170deg) saturate(190%); */
`;

const ImageContainer = styled.div`
  img {
    border-radius: ${rounded.lg};
    /* margin: 15px 0; */
  }
`;

const TextContainer = styled.div`
  color: ${color.blue_grey_800};

  /* margin: 15px 0; */
`;
