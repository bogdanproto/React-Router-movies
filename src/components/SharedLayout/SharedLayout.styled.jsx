import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 16px 24px;
  background-color: lightgray;

  nav {
    display: flex;
    gap: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &:hover {
    color: blue;
  }

  &.active {
    color: blue;
  }
`;
