import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {
  Box,
  Flex,
  Container,
  useColorMode,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const AppBar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const { isLoggedIn } = useAuth();
  return (
    <Container
      maxW="container.lg"
      p="5"
      bgGradient="linear(to-r, yellow.200, blue.500)"
    >
      <Box
        as="header"
        py={2}
        w="100%"
        position="relative"
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <Flex justifyContent="space-between" aline-items="center">
          <IconButton
            aria-label="toggle theme"
            rounded="full"
            size="lg"
            position="absolute"
            top="15%"
            left="74%"
            variant="outline"
            colorScheme="purple"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
          />
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
        <Divider mt="8" />
      </Box>
    </Container>
  );
};
