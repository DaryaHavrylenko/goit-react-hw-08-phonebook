import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Box, Flex, Container } from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container maxW="container.lg" bg="#B2F5EA" p="5">
      <Box as="header" py={2} w="100%">
        <Flex justifyContent="space-between" aline-items="center">
          <Navigation />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Box>
    </Container>
  );
};
