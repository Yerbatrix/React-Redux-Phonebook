import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      bg="teal"
      p="4"
      borderBottom="2px"
      borderBottomColor="cyan.500"
      borderRadius="md"
      width="100%"
      maxWidth="960px"
      marginX="auto"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Navigation />
        </Box>
        <Spacer />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Flex>
    </Box>
  );
};
