import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../modules/ContactForm/ContactForm';
import ContactList from '../modules/ContactList/ContactList';
import { selectItems } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { HelmetProvider } from 'react-helmet-async';

export default function Contacts() {
  const dispatch = useDispatch();
  const { contacts, error } = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <HelmetProvider>
        <title>Contacts</title>
      </HelmetProvider>
      <ContactForm contacts={contacts} />
      <ContactList contacts={contacts} error={error} />{' '}
    </main>
  );
}
