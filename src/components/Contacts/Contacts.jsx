//import PropTypes from 'prop-types';
//mport { List, Item, Text, Button } from './Contacts.styled';
import { Button, UnorderedList, ListItem } from '@chakra-ui/react';
import { getContact, getFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { MdDeleteForever } from 'react-icons/md';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const filter = useSelector(getFilter);
  const normFilter = filter.toLowerCase();
  const filterContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  return (
    <UnorderedList>
      {filterContactList.map(({ id, name, number }) => (
        <ListItem key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            color="#F6AD55"
            variant="outline"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <MdDeleteForever size="1.5rem" />
          </Button>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.object),

// }
