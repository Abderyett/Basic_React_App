import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { format } from 'date-fns';
import { color, rounded } from '../utilities';
import { Loading } from './Loading';
import { Modal } from './Modal';
import { Cast } from './Cast';
import NavHome from './NavHome';
import MovieDetails from './MovieDetails';
import { CircleSvg } from './svg';
import { useGlobalContext } from '../context';

export function SingleMovie() {
  const { setShowModal, showModal } = useGlobalContext();
  const [singleMovie, setSingleMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoId, setvideoId] = useState([]);
  const { id } = useParams();
  const detailUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const res = await axios.get(detailUrl);

      setSingleMovie(res.data);

      setLoading(false);
    } catch (error) {
      console.log('Oh no there is an Error', error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const {
    backdrop_path: backdrop,
    genres,
    title,
    overview,
    homepage,
    budget,
    status,
    spoken_languages: language,
    production_companies: companies,
    poster_path: poster,
    release_date: releaseDate,
    vote_average: voteAverage,
    runtime,
    tagline,
  } = singleMovie;

  // const fetchVideoId = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${title}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  //     );
  //     console.log(data);

  //     setvideoId(data.items[0].id.videoId);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchVideoId();
  // }, [videoId]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {showModal && <Modal videoId={videoId} />}
      <NavHome title={title} />
      <StyledContainer backdrop={backdrop}>
        <ImageContainer>
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster}`} alt={title} />
        </ImageContainer>
        <TextContainer>
          <h1>
            {title} ({!releaseDate ? 'No date' : format(new Date(releaseDate), ' yyyy ')})
          </h1>
          <StyledGenre runtime={runtime}>
            {genres && genres.map((el) => <span key={el.id}>{el.name}</span>)}
          </StyledGenre>

          <StatContainer>
            <CircleSvg voteAverage={voteAverage} />

            <div>
              User <br />
              Score
            </div>
            <button onClick={() => setShowModal(true)} type="submit">
              <span dataSi>&#9654; Play trailer</span>
            </button>
          </StatContainer>
          <em>{tagline}</em>
          <Overview>
            <h2>Overview</h2> <br />
            <p> {overview}</p>
          </Overview>
        </TextContainer>
      </StyledContainer>
      <DetailsContainer>
        <Cast movieID={id} />
        <MovieDetails homepage={homepage} budget={budget} status={status} language={language} companies={companies} />
      </DetailsContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 483px;
  background: ${(props) => `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.backdrop})`};
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Sans Regular';
  display: grid;
  grid-template-columns: 30rem 50%;
  grid-gap: 2rem;
  padding-left: 30px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
`;

const ImageContainer = styled.div`
  img {
    border-radius: ${rounded.lg};
  }
`;

const TextContainer = styled.div`
  color: ${color.white};
  font-family: 'Sans Regular';
  width: 100%;
  max-width: 1280px;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: ${rounded.lg};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    font-family: 'Sans Regular';
  }
  em {
    color: ${color.grey_400};
    font-size: 1.4rem;
    font-family: 'Sans Regular';
  }
`;
const StatContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  div {
    margin-left: 0.75rem;
    font-size: 1.5rem;
  }
  button {
    margin-left: 1rem;

    cursor: pointer;
    color: white;
    background: transparent;
    &:focus {
      outline: none;
    }
    span {
      font-size: 1.5rem;
      font-family: 'Sans Regular';
    }
  }
`;
const Overview = styled.div`
  margin-top: 2rem;
  font-size: 1.5rem;
  p {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;
const DetailsContainer = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 5rem;
  width: 90vw;
  max-width: 1000px;
`;

const StyledGenre = styled.p`
  font-size: 1.4rem;
  padding-bottom: 4rem;
  &:after {
    content: '  ●  ${(props) => props.runtime}m';
  }

  span:not(:empty) ~ span:not(:empty):before {
    content: ',  ';
  }
`;
