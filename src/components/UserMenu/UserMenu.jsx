import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button
        type="button"
        size="sm"
        mt="1"
        color="#F6AD55"
        variant="outline"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
