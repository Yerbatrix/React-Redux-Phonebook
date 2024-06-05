import React from 'react';
import { VStack, Heading, UnorderedList } from '@chakra-ui/react';
import ContactListItem from '../ContactListItem/ContactListItem';
import Counter from '../Counter/Counter';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <VStack align="center" spacing="4">
      <Heading size="lg">Contact List</Heading>
      <Counter />
      <UnorderedList listStyleType="none" width="100%">
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default ContactList;
