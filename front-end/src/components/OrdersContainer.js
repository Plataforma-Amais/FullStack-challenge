import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';

import AppContext from '../context/app.context';

import OrderCard from './OrderCard';

export default function OrdersContainer({ orders }) {
  const { tokenContext: { token } } = useContext(AppContext);

  const emptyOrders = (token.role === 'administrator')
    ? 'Não há pedidos no banco de dados.'
    : 'Você ainda não tem pedidos.';

  return (
    <section className="orders-container">
      { (orders.length < 1)
        ? <h4>{ emptyOrders }</h4>
        : orders.map((order, index) => (
          <OrderCard order={ order } index={ index } key={ order.id } />)) }
    </section>
  );
}

OrdersContainer.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.any),
};

OrdersContainer.defaultProps = {
  orders: [],
};
