import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { Form, Text } from 'informed';

import { register } from 'store/registration/actions';
import * as Validators from './validators';

import './Registration.css';

class Registration extends Component {
  handleSubmit = formState => {
    const { email, username, password } = formState;
    this.props.register(email, username, password);
  };

  render() {
    const { intl } = this.props;
    return (
      <div id="registration">
        <Form id="registrationForm" onSubmit={formState => this.handleSubmit(formState)}>
          {({ formState }) => (
            <Fragment>
              <div>
                <label htmlFor="registrationEmail">
                  <FormattedMessage id="registration.email" />
                </label>
                <Text
                  field="email"
                  id="registrationEmail"
                  placeholder={intl.formatMessage({ id: 'registration.emailPlaceholder' })}
                  validate={Validators.validateEmail}
                  asyncValidate={Validators.validateEmailOnServer}
                  asyncValidateOnBlur
                  validateOnBlur
                  className={formState.errors.email || formState.asyncErrors.email ? 'registration-form-error' : ''}
                />
              </div>
              <div>
                <label htmlFor="registrationUsername">
                  <FormattedMessage id="registration.username" />
                </label>
                <Text
                  field="username"
                  id="registrationUsername"
                  placeholder={intl.formatMessage({ id: 'registration.usernamePlaceholder' })}
                  validate={Validators.validateUsername}
                  asyncValidate={Validators.validateUsernameOnServer}
                  asyncValidateOnBlur
                  validateOnBlur
                  className={formState.errors.username || formState.asyncErrors.username ? 'registration-form-error' : ''}
                />
              </div>
              <div>
                <label htmlFor="registrationPassword">
                  <FormattedMessage id="registration.password" />
                </label>
                <Text
                  field="password"
                  id="registrationPassword"
                  type="password"
                  placeholder={intl.formatMessage({ id: 'registration.passwordPlaceholder' })}
                  validate={Validators.validatePassword}
                  validateOnBlur
                  className={formState.errors.password ? 'registration-form-error' : ''}
                />
              </div>
              <div>
                <label htmlFor="registrationPasswordConfirmation">
                  <FormattedMessage id="registration.passwordConfirmation" />
                </label>
                <Text
                  field="passwordConfirmation"
                  id="registrationPasswordConfirmation"
                  type="password"
                  placeholder={intl.formatMessage({ id: 'registration.passwordPlaceholder' })}
                  validate={Validators.validatePasswordConfirmation}
                  validateOnBlur
                  className={formState.errors.passwordConfirmation ? 'registration-form-error' : ''}
                />
              </div>
              <button type="submit">Submit</button>
            </Fragment>
          )}
        </Form>
      </div>
    );
  }
}

Registration.propTypes = {
  intl: intlShape.isRequired,
  register: PropTypes.func.isRequired
};

const MapDispatchToProps = dispatch => ({
  register: (email, username, password) => dispatch(register(email, username, password))
});

export default connect(
  null,
  MapDispatchToProps
)(injectIntl(Registration));
