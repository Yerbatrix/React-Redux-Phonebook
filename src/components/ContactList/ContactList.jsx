import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import Counter from '../Counter/Counter';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <h2>Contact List</h2>
      <Counter />
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
