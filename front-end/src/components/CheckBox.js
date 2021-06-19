import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
  const { callback } = props;

  return (
    <label htmlFor="quero-vender" className="inputError">
      <input
        id="quero-vender"
        type="checkbox"
        data-testid="signup-seller"
        onClick={ (e) => callback(e.target) }
      />
      Quero vender
    </label>
  );
};

CheckBox.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default CheckBox;
