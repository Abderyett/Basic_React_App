import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';
import { color, shadow, rounded } from '../utilities';
import { Loading } from './Loading';
import { useGlobalContext } from '../context';
import noImage from '../images/noActorImage1.png';

export function Cast({ movieID }) {
  const { loading, setLoading } = useGlobalContext();
  const [actors, setActors] = useState([]);
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
    <>
      {loading && <Loading />}
      <StyledTable>
        <TableHead>
          <tr>
            <th colSpan="3">Cast</th>
          </tr>
        </TableHead>
        {actors.map((actor) => {
          const { id, character, name, profile_path: image } = actor;
          return (
            <TableBody key={id}>
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
    </>
  );
}

const StyledTable = styled.table`
  border-bottom: 0.5px solid ${color.grey_400};
  border-radius: ${rounded.lg};
  border-collapse: collapse;
  color: ${color.blue_grey_700};
  font-size: 1.5rem;
  width: 40vw;
  max-width: 780px;
  margin: 2rem;
`;

const TableHead = styled.thead`
  tr,
  th {
    border-bottom: 3px solid ${color.blue_500};
    box-shadow: ${shadow.md};
    text-align: left;
    padding: 1rem;
    font-size: 2rem;
  }
`;
const TableBody = styled.tbody`
  /* &:nth-child(2n + 1) {
    background: ${color.grey_200};
  } */
  tr,
  td {
    border-bottom: 1px solid ${color.grey_500};

    text-align: left;
    padding: 0.4rem;
    img {
      height: 45px;
      object-fit: contain;
      border-radius: ${rounded.sm};
    }
  }
`;

Cast.propTypes = PropTypes.number;
