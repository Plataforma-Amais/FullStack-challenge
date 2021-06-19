import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AppContext from '../context/app.context';

import OrderProduct from './OrderProduct';
import { convertDate } from '../utils';
import api from '../services';

export default function OrderDetails() {
  const { tokenContext: { token },
    productsContext: { products } } = useContext(AppContext);
  const [order, setOrder] = useState();

  const params = useParams();

  const history = useHistory();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const currOrder = await api.client.getSaleById({ ...token, saleId: params.id });
        if (currOrder.code) {
          history.push({
            pathname: '/error',
            state: { ...currOrder } });
        }
        setOrder(currOrder);
      } catch (error) {
        console.log(error);
      }
    };
    if (!order) fetchOrder();
  }, [order, setOrder, params, token, history]);

  if (!order || !products) return 'Loading order...';

  return (
    <section className="order-detail-wrapper">
      <h3 data-testid="order-number">{ `Pedido ${order.id}` }</h3>
      <p data-testid="order-date">{ convertDate(order.createdAt)[0] }</p>
      <section>
        <p data-testid="order-status">{ order.status }</p>
      </section>
      { order.products.map((curr, index) => (
        <OrderProduct index={ index } product={ curr } key={ index } />
      )) }
      <p data-testid="order-total-value">
        { `Total: R$ ${order.totalPrice.replace('.', ',')}` }
      </p>
    </section>
  );
}
