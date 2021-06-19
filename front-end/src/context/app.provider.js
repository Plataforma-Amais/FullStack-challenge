import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import useStorage from '../hooks/useStorage';
import AppContext from './app.context';
import api from '../services';

const AppProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('login')));
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || {});
  const [products, setProducts] = useState([]);
  const updateLogin = useStorage('login');
  const updateCart = useStorage('cart');

  const tokenContext = useMemo(() => ({ token, setToken }), [token, setToken]);

  const productsContext = useMemo(() => (
    { products, setProducts }
  ), [products, setProducts]);

  const cartContext = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  useEffect(() => {
    updateLogin(token);
  }, [token, updateLogin]);

  useEffect(() => {
    updateCart(cart);
  }, [cart, updateCart]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsArray = await api.getProducts(token).catch((error) => error);
      setProducts(productsArray);
    };
    if (token && Object.keys(token).length > 0
      && products && products.length < 1) fetchProducts();
  }, [setProducts, products, token]);

  return (
    <AppContext.Provider value={ { productsContext, tokenContext, cartContext } }>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};

export default AppProvider;
