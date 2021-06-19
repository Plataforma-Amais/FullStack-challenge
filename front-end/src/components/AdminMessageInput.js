import React from 'react';
import PropTypes from 'prop-types';

export default function MessageInput({ callback, value, sendMessage, className }) {
  return (
    <form onSubmit={ sendMessage } className={ className }>
      <fieldset>
        <legend>
          Escrever mensagem
        </legend>
        <textarea
          value={ value }
          onChange={ callback }
          data-testid="message-input"
          rows="1"
        />
        <button id="submit" type="submit" data-testid="send-message">
          Enviar
        </button>
      </fieldset>
    </form>
  );
}

MessageInput.propTypes = {
  callback: PropTypes.func,
  className: PropTypes.string,
  sendMessage: PropTypes.func,
  value: PropTypes.string,
};

MessageInput.defaultProps = {
  callback: () => {},
  className: '',
  sendMessage: () => {},
  value: () => {},
};
