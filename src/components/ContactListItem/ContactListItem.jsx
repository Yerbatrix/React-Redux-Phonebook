import React, { useState } from 'react';
import { ListItem, Flex, Text, Button, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/operations';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState({ ...contact });
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = () => {
    setIsEditing(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setEditedContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAcceptEdit = () => {
    dispatch(updateContact(editedContact));
    setIsEditing(false);
  };

  return (
    <ListItem p="4" borderBottom="1px solid" borderColor="gray.200">
      <Flex justify="space-between" align="center">
        <div>
          {isEditing ? (
            <>
              <Input
                name="name"
                value={editedContact.name}
                onChange={handleChange}
                placeholder={contact.name}
                mb="2"
              />
              <Input
                name="number"
                value={editedContact.number}
                onChange={handleChange}
                placeholder={contact.number}
              />
            </>
          ) : (
            <>
              <Text fontSize="lg" fontWeight="semibold">
                {contact.name}
              </Text>
              <Text>{contact.number}</Text>
            </>
          )}
        </div>
        <Flex>
          {isEditing ? (
            <Button colorScheme="green" onClick={handleAcceptEdit} mr="2">
              Accept
            </Button>
          ) : (
            <Button colorScheme="blue" onClick={handleEditContact} mr="2">
              Edit
            </Button>
          )}
          <Button
            colorScheme="red"
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </ListItem>
  );
};

export default ContactListItem;
