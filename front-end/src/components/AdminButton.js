import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ disabled, id, callback }) => {
  let testId;
  let label;
  let newStatus;
  switch (id) {
  case 'preparando':
    label = 'Preparar pedido';
    testId = 'mark-as-prepared-btn';
    newStatus = 'Preparando';
    break;
  case 'entregue':
    label = 'Marcar como entregue';
    testId = 'mark-as-delivered-btn';
    newStatus = 'Entregue';
    break;
  default:
    return null;
  }

  return (
    <button
      type="button"
      onClick={ () => callback(newStatus) }
      disabled={ disabled }
      data-testid={ testId }
    >
      { label }
    </button>
  );
};

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  callback: PropTypes.func,
};

Button.defaultProps = {
  callback: () => {},
  disabled: false,
  id: '',
};
