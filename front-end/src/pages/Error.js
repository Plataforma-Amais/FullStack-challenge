import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Error() {
  const { state } = useLocation();
  console.log(state);

  const errorMessage = (state.message)
    ? state.message
    : 'Something went (utterly) wrong.';
  return (
    <div>
      { (state.code && state.code === 'C_ERR_EMAIL_UNAVAIBLE')
        ? <h2>E-mail already in database.</h2>
        : <h2>{ errorMessage }</h2> }
    </div>
  );
}
