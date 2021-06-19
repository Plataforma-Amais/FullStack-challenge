import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/app.context';
import { Topbar, Loading, OrdersContainer } from '../components';
import api from '../services';

import '../styles/Orders.css';

export default function Orders() {
  const { tokenContext: { token } } = useContext(AppContext);
  const [orders, setOrders] = useState();

  const history = useHistory();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersArray = await api.client.getSales(token);
        setOrders(ordersArray);
      } catch (error) {
        console.log(error);
      //   history.push({
      //     pathname: '/error',
      //     state: { ...error } });
      }
    };
    fetchOrders();
  }, [setOrders, token, history]);

  const title = 'Meus Pedidos';

  return (
    <section>
      <Topbar title={ title } />
      { (!orders)
        ? <Loading />
        : <OrdersContainer orders={ orders } /> }
    </section>
  );
}
