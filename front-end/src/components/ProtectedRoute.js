import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import AppContext from '../context/app.context';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { tokenContext: { token } } = useContext(AppContext);
  return (<Route
    { ...rest }
    render={ (props) => {
      if (token && token.token) {
        return <Component { ...props } />;
      }
      return (<Redirect
        to={ {
          pathname: '/login',
          state: { from: props.location },
        } }
      />);
    } }
  />);
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.objectOf(PropTypes.any),
};

ProtectedRoute.defaultProps = {
  location: {},
};
