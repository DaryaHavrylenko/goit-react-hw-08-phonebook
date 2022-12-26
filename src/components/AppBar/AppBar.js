import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Box, Flex, Container } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container maxW="container.lg" bg="#4FD1C5">
      <Box as="header" py={2} w="100%">
        <Flex justifyContent="space-between" aline-items="centr">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
    </Container>
  );
};
