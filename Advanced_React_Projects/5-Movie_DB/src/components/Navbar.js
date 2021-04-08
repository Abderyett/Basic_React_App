import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../utilities';
import { Logo } from './svg';
import Search from './Search';

export function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
    </Nav>
  );
}

const Nav = styled.nav`
  height: 6rem;
  background: rgb(43, 108, 176);
  background: linear-gradient(90deg, rgba(43, 108, 176, 1) 0%, rgba(44, 82, 130, 1) 100%);
  color: ${color.grey_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1400px) {
    justify-content: space-around;
  }
`;
