import { validate } from 'data/registration';
import { emailRegex } from 'utils/constants';
import { intl } from 'components/IntlGlobalProvider';

const validateFieldOnServer = async (value, field) => {
  let data;
  try {
    data = await validate(field, value);
  } catch (e) {
    return null;
  }
  if (data.email === 'exists') {
    return intl.formatMessage({ id: 'registration.isTaken' }, { field });
  }
  return null;
};

export const validateUsername = username => {
  const minLength = 3;
  const maxLength = 15;

  if (username && username.length >= minLength && username.length <= maxLength) {
    return null;
  }
  return intl.formatMessage({ id: 'registration.usernameError' }, { minLength, maxLength });
};

export const validateUsernameOnServer = async username => validateFieldOnServer(username, 'username');

export const validateEmailOnServer = async email => validateFieldOnServer(email, 'email');

export const validateEmail = email => {
  if (!email) {
    return intl.formatMessage({ id: 'registration.cantBeEmpty' });
  }
  if (emailRegex.test(String(email).toLowerCase())) {
    return null;
  }
  return intl.formatMessage({ id: 'registration.invalidEmail' });
};

export const validatePassword = password => {
  if (!password) {
    return intl.formatMessage({ id: 'registration.cantBeEmpty' });
  }
  const minLength = 6;
  if (password.length < minLength) {
    return intl.formatMessage({ id: 'registration.passwordToShort' }, { minLength });
  }
  return null;
};

export const validatePasswordConfirmation = (password, values) => {
  if (!password) {
    return intl.formatMessage({ id: 'registration.cantBeEmpty' });
  }
  if (values.password !== password) {
    return intl.formatMessage({ id: 'registration.passwordsDoNotMatch' });
  }
  return null;
};
