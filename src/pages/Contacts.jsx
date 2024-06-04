import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/operations';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Counter from '../components/Counter/Counter';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts</title>
      </Helmet>
      <Counter />
      <ContactForm />
      <ContactList />
    </>
  );
}
