import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled.li`
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const LinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 4px;
  height: 100%;

  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  color: #1c1b1b;

  img {
    width: auto;
    height: auto;
    object-fit: cover;

    border-radius: 8px;
  }

  p {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
  }
`;
