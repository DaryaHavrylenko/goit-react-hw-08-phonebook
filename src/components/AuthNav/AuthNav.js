import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNav = () => {
  return (
    <nav>
      <Link
        to="/register"
        style={{
          margin: 8,
          padding: 8,
        }}
      >
        Register
      </Link>
      <Link
        to="/login"
        style={{
          padding: 8,
        }}
      >
        Log In
      </Link>
    </nav>
  );
};
const Link = styled(NavLink)`
  &.active {
    color: #555353;
    background-color: #d6bcfa;
    border-radius: 4px;
  }
`;
