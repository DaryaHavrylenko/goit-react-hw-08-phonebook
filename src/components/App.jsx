//import { Container } from './Container.styled';
//import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
//import { theme } from './ThemeProvider/theme';
//import { Section } from './Section/Section';
//import { Form } from './Form/Form';
//import { ContactsWrapper } from './Contacts/ContactsWrapper';
//import { Filter } from './Filter/Filter';
//import { Contacts } from './Contacts/Contacts';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
//import { fetchContacts } from '../redux/contacts/operations';
//import { getIsLoading, getError } from '../redux/contacts/selectors';
import { useAuth } from 'hooks';
import { refreshUser } from '../redux/auth/operations';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

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

  //   const isLoading = useSelector(getIsLoading);
  //   const error = useSelector(getError);

  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);
  return isRefreshing ? (
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
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
