import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import { Wrapper, Item, Button } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../../icons/cross.svg';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button
            type="button"
            aria-label="Delete contact"
            onClick={() => dispatch(deleteContact(id))}
          >
            <DeleteIcon />
          </Button>
        </Item>
      ))}
    </Wrapper>
  );
};

export default ContactList;
