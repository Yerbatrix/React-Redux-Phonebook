import React from 'react';
import css from './ErrorComponent.module.css';
import errorImage from '../../images/homer-simpson-dialing.gif';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <div>
      <p className={css.error}>Error: {errorMessage}</p>
      <img className={css.errorImage} src={errorImage} alt="Error" />
      <p className={css.errorMessage}>
        We are sorry, we couldn't find your contacts...
      </p>
    </div>
  );
};

export default ErrorComponent;
