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
          <img src={poster && `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster}`} alt={title} />
        </ImageContainer>
        <TextContainer>
          <h1>
            {title} ({!releaseDate ? 'No date' : format(new Date(releaseDate), ' yyyy ')})
          </h1>
          <StyledGenre runtime={runtime}>
            {genres && genres.map((el) => <span key={el.id}>{el.name}</span>)}
          </StyledGenre>

          <StatContainer>
            <div>
              <CircleSvg voteAverage={voteAverage} />

              <div>User Score</div>
            </div>
            <button onClick={() => setShowModal(true)} type="submit">
              <span>&#9654; Play trailer</span>
            </button>
          </StatContainer>
          <Overview>
            <h3>{tagline}</h3>
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
  width: 100vw;
  height: 483px;
  background: ${(props) => `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${props.backdrop})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  font-family: 'Sans Regular';
  display: grid;
  grid-template-columns: auto 50%;
  grid-gap: 2rem;
  padding-left: 30px;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  @media (max-width: 1024px) {
    grid-gap: 1rem;
  }
  @media (min-width: 768px) and (max-width: 888px) {
    grid-template-columns: auto 60%;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
    padding-top: 1rem;
    padding-left: 0;
    height: auto;
    grid-gap: 12px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
  }
`;

const ImageContainer = styled.div`
  align-self: center;
  img {
    border-radius: ${rounded.lg};
    @media (max-width: 1024px) {
      width: 250px;
      height: 400px;
    }
    @media (max-width: 768px) {
      width: 80px;
      height: 130px;
      margin-left: 2rem;
    }
  }
`;

// ? ============== Text Container ===============//

const TextContainer = styled.div`
  color: ${color.white};
  font-family: 'Sans Regular';
  width: 100%;
  max-width: 768px;
  height: 450px;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: ${rounded.lg};

  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 400px;
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    background-color: ${color.grey_800};
    border-radius: unset;
    justify-content: flex-start;
    padding: 0;
    flex-wrap: wrap;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    font-family: 'Sans Regular';

    @media (max-width: 1024px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
      padding: 1rem 2rem;
      background-color: ${color.grey_900};
    }
  }
`;
// * ============== Genre Container ===============//

const StyledGenre = styled.p`
  font-size: 1.4rem;
  padding: 2rem 1rem;
  @media (max-width: 768px) {
    text-align: center;
    background-color: ${color.grey_900};
    padding: 0;
  }
  &:after {
    content: '  ●  ${(props) => props.runtime} m';
  }

  span:not(:empty) ~ span:not(:empty):before {
    content: ',  ';
  }
  @media (max-width: 1024px) {
    padding-bottom: 2rem;
  }
`;

// ? ============== Stats Container ===============//

const StatContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.5rem;
    display: flex;
    justify-content: space-around;
    background-color: ${color.grey_900};
    padding-bottom: 2rem;
    div {
      display: flex;
      justify-content: center;
      div {
        padding: 1.5rem;
        padding-left: 0.75rem;
      }
    }
  }
  div {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    div {
      padding: 1.5rem;
      padding-left: 0.75rem;
    }
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
      padding: 1rem;

      @media (max-width: 768px) {
        border-left: 1px solid ${color.grey_700};
        padding-left: 5rem;
      }
    }
  }
`;
//! ============== Overview Container ===============//

const Overview = styled.div`
  /* margin-top: 2rem; */

  h2 {
    padding-bottom: 1rem;
  }
  h3 {
    color: ${color.grey_400};
    font-size: 1.4rem;
    letter-spacing: 1px;
    font-style: italic;
    padding-bottom: 1rem;
    @media (max-width: 768px) {
      background-color: ${color.grey_800};
    }
  }
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    background-color: ${color.grey_800};
  }

  p {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

//! ============== Cast and Movies Details ===============//
const DetailsContainer = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 5rem;
  width: 90vw;
  max-width: 1000px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1rem;
    justify-content: left;
  }
`;
