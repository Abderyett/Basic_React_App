import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../utilities';
import { Logo } from './svg';
import Search from './Search';
import { useGlobalContext } from '../context';

export function Navbar() {
  const { setTerm, setPages } = useGlobalContext();
  const clickHadnler = () => {
    setTerm('');
    setPages(1);
  };
  return (
    <Nav>
      <Link to="/" onClick={clickHadnler}>
        <Logo />
      </Link>
      <Search />
    </Nav>
  );
}

const Nav = styled.nav`
  height: 6rem;
  background: rgb(51, 78, 104);
  background: linear-gradient(21deg, rgba(51, 78, 104, 1) 0%, rgba(44, 82, 130, 1) 100%);
  color: ${color.grey_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1400px) {
    justify-content: space-around;
  }
`;
