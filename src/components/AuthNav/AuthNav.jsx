import { NavLink } from 'react-router-dom';
import { Box, Link, Text } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Box display="flex" alignItems="center">
      <Link
        as={NavLink}
        to="/register"
        mr="4"
        px="3"
        py="2"
        rounded="md"
        bg="teal.400"
        color="white"
        _hover={{ bg: 'teal.500' }}
      >
        <Text fontSize="sm">Register</Text>
      </Link>
      <Link
        as={NavLink}
        to="/login"
        px="3"
        py="2"
        rounded="md"
        bg="teal.400"
        color="white"
        _hover={{ bg: 'teal.500' }}
      >
        <Text fontSize="sm">Log In</Text>
      </Link>
    </Box>
  );
};
