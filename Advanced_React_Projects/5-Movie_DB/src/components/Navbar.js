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
  height: 5rem;
  background: ${color.blue_800};
  color: ${color.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
