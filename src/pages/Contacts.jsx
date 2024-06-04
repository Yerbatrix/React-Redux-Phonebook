import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from '../redux/operations';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Helmet>
          <title>Your Contacts</title>
        </Helmet>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
