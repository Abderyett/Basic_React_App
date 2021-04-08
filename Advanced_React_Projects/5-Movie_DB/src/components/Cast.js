import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { slice } from 'lodash';
import { motion } from 'framer-motion';
import { color, shadow, rounded } from '../utilities';
import { Loading } from './Loading';
import { useGlobalContext } from '../context';
import noImage from '../images/noActorImage1.png';

export function Cast({ movieID }) {
  const { loading, setLoading } = useGlobalContext();
  const [actors, setActors] = useState([]);
  const [limit, setLimit] = useState(6);
  const url = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const fetchActors = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setActors(data.cast);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchActors();
  }, [movieID]);

  return (
    <div>
      {loading && <Loading />}
      <StyledTable initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        <TableHead>
          <tr>
            <th colSpan="3">Cast</th>
          </tr>
        </TableHead>

        {slice(actors, 0, limit).map((actor) => {
          const { id, character, name, profile_path: image } = actor;
          return (
            <TableBody key={id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
              <tr>
                <td>
                  <img src={image ? `https://image.tmdb.org/t/p/w92${image}` : noImage} alt={name} />
                </td>
                <td>{name}</td>
                <td>{character}</td>
              </tr>
            </TableBody>
          );
        })}
      </StyledTable>
      {actors.length !== limit && (
        <StyledButton type="button" onClick={() => setLimit((prev) => prev + (actors.length - prev))}>
          Load More...
        </StyledButton>
      )}
    </div>
  );
}

const StyledTable = styled(motion.table)`
  border-bottom: 0.5px solid ${color.grey_400};

  border-collapse: collapse;
  color: ${color.blue_grey_700};
  font-size: 1.5rem;
  width: 40vw;
  max-width: 580px;
  margin: 2rem;
  font-family: 'Sans Regular';
  @media (max-width: 768px) {
    width: 70vw;
    font-size: 1.25rem;
  }
`;

const TableHead = styled.thead`
  tr,
  th {
    border-bottom: 2px solid ${color.grey_500};
    box-shadow: ${shadow.shadow};
    text-align: left;
    padding: 1rem;
    font-size: 2rem;
    font-family: 'Sans Regular';
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
const TableBody = styled(motion.tbody)`
  /* &:nth-child(2n + 1) {
    background: ${color.grey_200};
  } */
  tr,
  td {
    border-bottom: 1px solid ${color.grey_500};

    text-align: left;
    padding: 0.4rem;
    font-family: 'Sans Regular';
    img {
      height: 45px;
      object-fit: contain;
      border-radius: ${rounded.sm};
    }
  }
`;

const StyledButton = styled.button`
  margin-left: 2rem;
  margin-bottom: 2rem;
  background-color: transparent;
  color: ${color.blue_500};
  font-size: 1.5rem;
  font-weight: 700;
  &:hover {
    color: ${color.blue_400};
    cursor: pointer;
  }
`;

Cast.propTypes = PropTypes.number.isRequired;
