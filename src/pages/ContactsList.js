import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIsLoading } from '../redux/contacts/selectors';
import { fetchContacts } from '../redux/contacts/operations';
import { Form } from '../components/Form/Form';
import { Contacts } from '../components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Flex } from '@chakra-ui/react';

export default function ContactsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Flex justifyContent="flex-start" py="10">
        <Form />
      </Flex>

      <Filter />

      <div>{isLoading && 'Request in progress...'}</div>

      <Contacts />
    </>
  );
}
