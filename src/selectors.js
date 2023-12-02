import { createSelector } from 'reselect';

const registrationSelector = state => state.registration;

export const getUser = createSelector(
  [registrationSelector],
  registration => registration.user
);

export const getUsername = createSelector(
  [getUser],
  user => user.username
);

export const getEmail = createSelector(
  [getUser],
  user => user.email
);

export const getPassword = createSelector(
  [getUser],
  user => user.password
);

export const getGender = createSelector(
  [getUser],
  user => user.gender
);

export const getAge = createSelector(
  [getUser],
  user => user.age
);