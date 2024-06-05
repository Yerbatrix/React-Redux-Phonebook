import React from 'react';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

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
    textAlign: 'center',
    fontFamily: 'cursive',
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
  infoContainer: {
    marginTop: '40px',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '800px',
  },
  technologies: {
    marginTop: '20px',
    fontSize: '16px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    listStyleType: 'none',
    padding: '0',
  },
  technologyItem: {
    padding: '10px',
    border: '1px solid #fff',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  technologyLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
};

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
        <h1 style={styles.title}>Your PhoneBook welcome page</h1>
        {!isLoggedIn ? (
          <>
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
          </>
        ) : (
          <>
            <p
              style={{
                ...styles.infoContainer,
                fontSize: '14px',
                padding: '0 20px',
              }}
            >
              This is a Homepage of my first functional PhoneBook App.
            </p>
            <article
              style={{
                ...styles.infoContainer,
                fontSize: '16px',
                padding: '0 20px',
              }}
            >
              If you're an experienced programmer, perhaps employed to check
              such beginner exercises (hi Ivan!), you probably see in this app
              an incredibly simple thing that you could handle in two hours or
              less. It likely evokes similar feelings as a drawing made by a
              child, immensely proud of their work, which you can smile at and
              say it's very nice. Just stick it on the fridge with a magnet and
              move on to more serious matters.
            </article>
            <article
              style={{
                ...styles.infoContainer,
                fontSize: '16px',
                padding: '0 20px',
              }}
            >
              However, this child is quite satisfied with their current stage,
              so please just pin this drawing to the fridge in your heart and
              smile. Maybe it's a simple thing, but every artist had to start
              with something simple. If there's anything to improve, I'd be
              happy to hear. Even simple things can be done better or worse,
              right? Even on something like this, there's always room for
              refinement.
            </article>
            <p
              style={{
                ...styles.infoContainer,
                fontSize: '14px',
                padding: '0 20px',
              }}
            >
              Bless you all!!!
            </p>
            <p
              style={{
                ...styles.infoContainer,
                fontSize: '14px',
                padding: '0 20px',
              }}
            >
              Rafał
            </p>
          </>
        )}
        <div style={styles.infoContainer}>
          <p>Technologies used:</p>
          <ul style={styles.technologies}>
            <a
              href="https://chakra-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                Chakra-UI: Component library for React UI.
              </li>{' '}
            </a>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                Redux: State management library for JavaScript applications.
              </li>
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                React: JavaScript library for building user interfaces.
              </li>
            </a>
            <a
              href="https://github.com/rt2zz/redux-persist"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                Redux Persist : Persist and rehydrate a Redux store.
              </li>
            </a>
            <a
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                Redux Toolkit : Official, opinionated, batteries-included
                toolset for efficient Redux development.
              </li>
            </a>
            <a
              href="https://github.com/nfl/react-helmet#readme"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                React Helmet : Manage document head data with React.
              </li>
            </a>
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.technologyLink}
            >
              <li style={styles.technologyItem}>
                React Router Dom : Declarative routing for React.
              </li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
