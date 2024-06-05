import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { logIn } from '../../redux/auth/operations';
import { selectLoginError } from '../../redux/auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(selectLoginError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Box w="full" maxW="320px" p="4" borderWidth="1px" borderRadius="lg">
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing="4">
          {loginError && (
            <Text color="red.500" textAlign="center">
              {loginError}
            </Text>
          )}
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" mt={4} colorScheme="teal" size="lg">
            Log In
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
