import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 18px;
`;

export const Header = styled.header`
  padding: 16px 18px;
  background-color: lightgray;
  border-radius: 4px;

  nav {
    display: flex;
    gap: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #353599;
  }

  &.active {
    color: #353599;
  }
`;
