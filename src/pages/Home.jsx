import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #f06, #4a90e2)',
    color: 'white',
    padding: '20px',
  },
  title: {
    fontWeight: 500,
    fontSize: '48px',
    textAlign: 'center',
    animation: 'fadeIn 2s ease-in-out',
    marginBottom: '20px',
  },
  button: {
    fontSize: '18px',
    padding: '10px 20px',
    marginTop: '20px',
    animation: 'fadeIn 2s ease-in-out 1s',
  },
  keyframes: `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
  `,
};

export default function Home() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <style>{styles.keyframes}</style>
      <div style={styles.container}>
        <h1 style={styles.title}>Your PhoneBook welcome page </h1>
        <Button
          style={styles.button}
          colorScheme="teal"
          variant="solid"
          onClick={handleRegisterClick}
        >
          Register
        </Button>
        <Button
          style={styles.button}
          colorScheme="blue"
          variant="outline"
          onClick={handleLoginClick}
        >
          Log In
        </Button>
      </div>
    </>
  );
}
