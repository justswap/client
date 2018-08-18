import { validate } from '../../data/registration';
import { emailRegex } from '../../utils/constants';

const validateFieldOnServer = async (value, field) => {
  let data;
  try {
    data = await validate(field, value);
  } catch (e) {
    return null;
  }
  if (data.email === 'exists') {
    return this.props.intl.formatMessage({ id: 'registration.isTaken' }, { field });
  }
  return null;
};

export const validateUsername = username => {
  if (username && username.length > 3 && username.length < 15) {
    return null;
  }
  return this.props.intl.formatMessage({ id: 'registration.usernameError' });
};

export const validateUsernameOnServer = async username => this.validateFieldOnServer(username, 'username');

export const validateEmailOnServer = async email => this.validateFieldOnServer(email, 'email');

export const validateEmail = email => {
  if (!email) {
    return this.props.intl.formatMessage({ id: 'registration.cantBeEmpty' });
  }
  if (emailRegex.test(String(email).toLowerCase())) {
    return null;
  }
  return this.props.intl.formatMessage({ id: 'registration.invalidEmail' });
};

export const validatePassword = password => {
  if (!password) {
    return this.props.intl.formatMessage({ id: 'registration.cantBeEmpty' });
  }
  const minLength = 6;
  if (password.length < minLength) {
    return this.props.intl.formatMessage({ id: 'registration.passwordToShort' }, { minLength });
  }
  return null;
};

export const validatePasswordConfirmation = (password, values) => {
  if (!password) {
    return this.props.intl.formatMessage({ id: 'registration.cantBeEmpty' });
  }
  if (values.password !== password) {
    return this.props.intl.formatMessage({ id: 'registration.passwordsDoNotMatch' });
  }
  return null;
};
