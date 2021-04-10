import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { color } from '../utilities';

function NavHome({ title }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = _.debounce(() => {
    const currentPos = window.pageYOffset;
    if (prevScrollPos === currentPos) {
      setVisible(true);
    }
    if (prevScrollPos < currentPos) {
      setVisible(false);
      console.log('prevScrollPos', prevScrollPos);
      console.log('currentPos', currentPos);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Nav show={visible}>
      <StyledLink to="/">Home</StyledLink> | {title}
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100vw;
  height: 5rem;
  top: ${(props) => (props.show ? '0' : '-60px')};
  left: 0;
  position: fixed;

  background: rgb(51, 78, 104);
  background: linear-gradient(21deg, rgba(51, 78, 104, 1) 0%, rgba(44, 82, 130, 1) 100%);
  color: ${color.white};
  font-size: 1.75rem;
  font-family: 'Sans Regular';
  display: flex;
  align-items: center;
  justify-content: center;
  transition: top 0.6s ease;
  @media (max-width: 768px) {
    background: ${color.grey_700};
  }
`;
const StyledLink = styled(Link)`
  color: ${color.grey_100};
  text-decoration: none;
  margin: 2rem;
  position: relative;
  &:hover {
    color: ${color.grey_300};
  }
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
    background: ${color.grey_300};
  }
`;
NavHome.propTypes = PropTypes.string.isRequired;
export default NavHome;
