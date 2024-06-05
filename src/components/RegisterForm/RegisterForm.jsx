import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { selectRegisterError } from '../../redux/auth/selectors';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Divider,
  Text,
  Link,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const registerError = useSelector(selectRegisterError);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(formData));
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box maxW="400px" p={6} borderWidth="1px" borderRadius="lg">
      <Heading as="h2" size="lg" mb={4}>
        Register
      </Heading>
      <Divider mb={4} />
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl mb={4}>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormControl>
        {registerError && (
          <Text color="red.500" fontSize="sm" mb={4}>
            {registerError}
          </Text>
        )}
        <Button type="submit" mt={4} colorScheme="teal" size="lg">
          Register
        </Button>
      </form>
      <Text mt={4} fontSize="sm" color="gray.500">
        Already have an account?{' '}
        <Link as={NavLink} to="/login">
          Log In
        </Link>
      </Text>
    </Box>
  );
};
