import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import AppContext from '../context/app.context';

import AdminMenu from './AdminSideMenu';
import ClientMenu from './ClientSideMenu';

import '../styles/Topbar.css';

export default function Topbar(props) {
  const { tokenContext: { setToken, token } } = useContext(AppContext);
  const [hidden, setHidden] = useState('hide');
  const { title } = props;

  const history = useHistory();

  const logOff = () => {
    setToken({});
    history.push('/login');
  };

  const className = (token.role && token.role === 'administrator')
    ? 'admin-side-bar-container'
    : `side-menu-container ${hidden}`;

  const triggerSidebar = () => {
    const toggleHidden = (hidden === 'hide') ? 'show' : 'hide';
    setHidden(toggleHidden);
  };

  const menuProps = {
    className,
    callback: logOff,
  };

  return (
    <section className="topbar">
      <section className="header">
        { (token.role && token.role === 'client') && (
          <button
            type="button"
            onClick={ triggerSidebar }
            className="hamburguer"
            data-testid="top-hamburguer"
          >
            <FontAwesomeIcon icon={ faBars } className="icon" />
          </button>
        ) }
        <h1 className="title">Trybeer</h1>
        <h3 data-testid="top-title" className="subtitle">{ title }</h3>
      </section>
      { (token.role && token.role === 'administrator')
        ? <AdminMenu { ...menuProps } />
        : <ClientMenu { ...menuProps } /> }
    </section>
  );
}

Topbar.propTypes = {
  title: PropTypes.string,
};

Topbar.defaultProps = {
  title: 'TryBeer',
};
