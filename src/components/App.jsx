import { Container } from './Container.styled';
import { ThemeProvider } from 'styled-components';
//import { Route, Routes } from 'react-router-dom';
import { theme } from './ThemeProvider/theme';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactsWrapper } from './Contacts/ContactsWrapper';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { getIsLoading, getError } from '../redux/contacts/selectors';
//import { Navigation } from './Navigation/Navigation';
//import { Header } from './Header/Header.styled';
//import { lazy, Suspense } from 'react';

//const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {/* <Header>
        <Navigation />
      </Header> */}
      <Container>
        <ThemeProvider theme={theme}>
          <Section title="Phonebook">
            <Form />
            {isLoading && !error && <b>Request in progress...</b>}
          </Section>

          <ContactsWrapper title="Contacts">
            <Filter></Filter>

            <Contacts></Contacts>
          </ContactsWrapper>
        </ThemeProvider>
      </Container>
    </>
  );
};
