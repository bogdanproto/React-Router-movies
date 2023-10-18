import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBack = styled(NavLink)`
  color: black;
  font-weight: bold;

  &:hover {
    color: #353599;
  }

  &.active {
    color: #353599;
  }
`;

export const MovieCard = styled.div`
  div {
    display: flex;
    gap: 8px;
  }

  margin-top: 8px;
  padding: 8px;

  background-color: lightgray;
  border-radius: 4px;

  img {
    width: 240px;
    height: auto;
  }
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ul {
    display: flex;
    gap: 4px;
  }
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;

  p {
    font-weight: bold;
  }
`;

export const AddStyledLink = styled(NavLink)`
  color: black;
  font-weight: bold;

  &:hover {
    color: #353599;
  }

  &.active {
    color: #353599;
  }
`;
