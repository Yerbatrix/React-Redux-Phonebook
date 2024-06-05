import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Box, Link } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Link
        as={NavLink}
        to="/"
        mr="4"
        px="3"
        py="2"
        rounded="md"
        bg="teal.400"
        color="white"
        _hover={{ bg: 'teal.500' }}
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          to="/contacts"
          mr="4"
          px="3"
          py="2"
          rounded="md"
          bg="teal.400"
          color="white"
          _hover={{ bg: 'teal.500' }}
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
