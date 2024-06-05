import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex alignItems="center">
      <Box flex="1" pr="2">
        <Text
          fontWeight="bold"
          fontSize="lg"
          color="teal.900"
          fontFamily="Poppins, sans-serif"
          textShadow="1px 1px 2px rgba(0,0,0,0.3)"
        >
          Welcome, {user.name}
        </Text>
      </Box>
      <Button colorScheme="teal" size="sm" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
