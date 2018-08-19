import { locale } from 'utils/constants';
import { flattenMessages } from 'utils/i18n';

const messages = {
  en: {
    authentication: {
      login: 'Login'
    },
    registration: {
      email: 'email',
      emailPlaceholder: 'your@email.com',
      password: 'Password',
      passwordConfirmation: 'Confirm password',
      passwordPlaceholder: 'password',
      passwordsDoNotMatch: 'Passwords are different',
      passwordToShort: 'Password has to be at least {minLength} symbols long.',
      usernamePlaceholder: 'username',
      username: 'username',
      invalidEmail: 'Email address is invalid',
      cantBeEmpty: 'This field is required',
      isTaken: 'This {field} is already in use.',
      usernameError: 'Username must have between {minLength} and {maxLength} characters'
    }
  },
  pl: {
    authentication: {
      login: 'Zaloguj'
    }
  }
};

messages['pl-PL'] = messages.pl;
messages['en-US'] = messages.en;
messages['en-GB'] = messages.en;

export default flattenMessages(messages[locale] || messages['en-US']);
export { messages };
