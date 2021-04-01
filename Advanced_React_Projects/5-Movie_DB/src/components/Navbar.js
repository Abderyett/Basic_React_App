import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';
import { Logo } from './svg';
import Search from './Search';

export function Navbar() {
  return (
    <Nav>
      <Logo />
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
