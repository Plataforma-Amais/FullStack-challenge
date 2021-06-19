import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = (props) => {
  const { type, disabled, className } = props;

  let dataTestId;
  let label;
  switch (type) {
  case 'signup':
    dataTestId = 'signup-btn';
    label = 'Cadastrar';
    break;
  case 'signin':
    dataTestId = 'signin-btn';
    label = 'Entrar';
    break;
  case 'profile':
    dataTestId = 'profile-save-btn';
    label = 'Salvar';
    break;
  default: return null;
  }

  return (
    <button
      type="submit"
      className={ className }
      data-testid={ dataTestId }
      disabled={ disabled }
    >
      { label }
    </button>
  );
};

SubmitButton.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

SubmitButton.defaultProps = {
  className: '',
};

export default SubmitButton;
