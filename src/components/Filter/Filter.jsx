//import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
//import { Label, Input } from './Filter.styled';
import { getFilter } from '../../redux/contacts/selectors';
import { filterContact } from '../../redux/contacts/filterSlice';
import { Input, FormLabel } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const getFilterValue = e => {
    return dispatch(filterContact(e.target.value));
  };
  return (
    <>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        w="100"
        type="text"
        name="filter"
        value={filter}
        onChange={getFilterValue}
        focusBorderColor="#E9D8FD"
      />
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
