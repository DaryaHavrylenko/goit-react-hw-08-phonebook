import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import {
  Input,
  Box,
  InputGroup,
  Button,
  InputRightElement,
  FormLabel,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const handleClick = () => setShow(!show);
  return (
    <Box as="section" pt="20">
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <Input type="email" name="email" focusBorderColor="#E9D8FD" />
        </FormLabel>
        <FormLabel>
          Password
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              name="password"
              focusBorderColor="#E9D8FD"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormLabel>
        <Button type="submit" mt="10" variant="outline" colorScheme="purple">
          Log In
        </Button>
      </form>
    </Box>
  );
};
