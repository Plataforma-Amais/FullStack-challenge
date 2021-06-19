import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { name, testId, value, callback, readonly = 'false' } = props;

  let type;
  let label;

  switch (name) {
  case 'name':
    type = 'text';
    label = 'Nome';
    break;
  case 'email':
    type = 'email';
    label = 'Email';
    break;
  case 'password':
    type = 'password';
    label = 'Senha';
    break;
  case 'street':
    type = 'text';
    label = 'Rua';
    break;
  case 'house-number':
    type = 'number';
    label = 'Número';
    break;
  default: break;
  }

  let dataTestId;

  switch (testId) {
  case 'signup':
    dataTestId = `signup-${name}`;
    break;
  case 'signin':
    dataTestId = `${name}-input`;
    break;
  case 'profile':
    dataTestId = `profile-${name}-input`;
    break;
  case 'checkout':
    dataTestId = `checkout-${name}-input`;
    break;
  default: return null;
  }

  const inputProps = {
    type,
    id: name,
    name,
    value,
    'data-testid': dataTestId,
  };

  if (type === 'number') inputProps.min = 0;

  return (
    <label htmlFor={ name } className="inputError">
      { label }
      <input
        { ...inputProps }
        onChange={ (e) => callback(e.target) }
        readOnly={ readonly }
      />
    </label>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  testId: PropTypes.string.isRequired,
  callback: PropTypes.func,
  readonly: PropTypes.bool,
};

TextInput.defaultProps = {
  callback: () => {},
  value: '',
  readonly: false,
};

export default TextInput;
