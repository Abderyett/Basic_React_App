import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { color } from '../utilities';

function NavHome({ title }) {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink> | {title}
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  background: rgba(0, 0, 0, 0.7);
  color: ${color.white};
  font-size: 2rem;
  font-family: 'Sans Regular';
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  color: ${color.white};
  text-decoration: none;
  margin: 2rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 2px;
    right: 0;
    background: #fff;
    transition: width 0.5s ease;
    -webkit-transition: width 0.5s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    background: #fff;
  }
`;
NavHome.propTypes = PropTypes.string;
export default NavHome;
