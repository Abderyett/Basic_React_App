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
  width: 100vw;
  height: 5rem;
  top: 0;
  left: 0;
  position: sticky;
  background: rgb(43, 108, 176);
  background: linear-gradient(90deg, rgba(43, 108, 176, 1) 0%, rgba(44, 82, 130, 1) 100%);
  color: ${color.white};
  font-size: 1.75rem;
  font-family: 'Sans Regular';
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  color: ${color.grey_100};
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
