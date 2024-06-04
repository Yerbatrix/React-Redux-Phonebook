import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <p className={css.loader}></p>
      <h4>Loading contacts...</h4>
    </div>
  );
};

export default Loader;
