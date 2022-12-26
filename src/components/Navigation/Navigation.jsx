import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from 'styled-components';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link
        to="/"
        style={{
          padding: 8,
        }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          to="/contacts"
          style={{
            margin: 8,
            padding: 8,
          }}
        >
          Contacts
        </Link>
      )}
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
