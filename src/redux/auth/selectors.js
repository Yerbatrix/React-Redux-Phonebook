import { createSelector } from '@reduxjs/toolkit';

const selectAuth = state => state.auth;

export const selectIsLoggedIn = createSelector(
  [selectAuth],
  auth => auth.isLoggedIn
);

export const selectIsRefreshing = createSelector(
  [selectAuth],
  auth => auth.isRefreshing
);

export const selectUser = createSelector([selectAuth], auth => auth.user);

export const selectLoginError = createSelector(
  [selectAuth],
  auth => auth.loginError
);

export const selectRegisterError = createSelector(
  [selectAuth],
  auth => auth.registerError
);
