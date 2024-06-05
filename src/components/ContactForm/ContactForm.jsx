import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  Box,
} from '@chakra-ui/react';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    const isDuplicate = contacts.some(contact => contact.name === name);
    if (isDuplicate) {
      setError('Contact with this name already exists!');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
    setError('');
  };

  return (
    <Box p="4" border="1px solid" borderColor="gray.200" borderRadius="md">
      <form onSubmit={handleSubmit}>
        {error && (
          <Alert status="error" mb="4">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl id="nameInput" mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
            isRequired
          />
        </FormControl>
        <FormControl id="phoneInput" mb="4">
          <FormLabel>Phone number</FormLabel>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter phone number"
            isRequired
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" w="100%">
          Add contact
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
