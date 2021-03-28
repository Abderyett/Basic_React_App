import React from 'react';
import styled from 'styled-components';
import { color } from '../utilities';
import Logo from './logo';
import Search from './Search';

function Navbar() {
  return (
    <Nav>
      <Logo />
      <Search />
    </Nav>
  );
}

const Nav = styled.nav`
  height: 5rem;
  background: ${color.blue_grey_700};
  color: ${color.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navbar;
