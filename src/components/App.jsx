import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
//import styled from 'styled-components';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Footer } from './Footer/Footer';
import { useAuth } from 'hooks';
import { refreshUser } from '../redux/auth/operations';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Box, Divider } from '@chakra-ui/react';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/ContactsList'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <Box minH="100vh" p="5" position="relative">
        {isRefreshing ? (
          <b>Refreshing user...</b>
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/register"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Route>
          </Routes>
        )}
      </Box>
      <Divider />
      <Footer />
    </ChakraProvider>
  );
};
