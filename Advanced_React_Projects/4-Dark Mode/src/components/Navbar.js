import React from 'react';
import { FiSun } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';

import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { color } from '../utilities';

function Navbar() {
  const { toggle, setToggle } = useGlobalContext();
  return (
    <Nav>
      <h1>Overreacted</h1>
      <button type="button" onClick={() => setToggle(!toggle)}>
        {toggle ? <IoMoonSharp /> : <StyledSun />}
      </button>
    </Nav>
  );
}

const Nav = styled.nav`
  color: ${color.blue_900};
  height: 5rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 3rem;
    padding: 2rem;
  }
  button {
    background: transparent;
    font-size: 2rem;
    color: ${color.yellow_400};
    padding: 3rem;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const StyledSun = styled(FiSun)`
  color: ${color.grey_900};
`;

export default Navbar;
