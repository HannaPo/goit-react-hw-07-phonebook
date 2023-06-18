import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, ContactsTitle } from './App.styled';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

   useEffect(() => {
    dispatch(fetchContacts());
   }, [dispatch]);
  
    return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm/>
      <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
         {contacts.length === 0 && <p>No contacts found</p>}
      <ContactList />
    </Container>
  );
};

export default App;