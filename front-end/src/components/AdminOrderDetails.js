import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AppContext from '../context/app.context';

import OrderProduct from './OrderProduct';
import AdminButton from './AdminButton';
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
        const currOrder = await api.admin.getSaleById({ ...token, saleId: params.id });
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

  const updateStatus = async (newStatus) => {
    try {
      await api.admin.updateSale({ ...token, saleId: order.id, status: newStatus });
      setOrder({ ...order, status: newStatus });
      return { status: 'OK', message: `Sale status updated to ${newStatus}` };
    } catch (error) {
      return error;
    }
  };

  if (!order || !order.products || !products) return 'Loading order...';

  return (
    <section className="order-detail-wrapper">
      <h3 data-testid="order-number">{ `Pedido ${order.id}` }</h3>
      <p data-testid="order-date" className="date">{ convertDate(order.createdAt)[0] }</p>
      <section>
        <p>{ `Cliente: ${order.user.name}` }</p>
        <p data-testid="order-status" className="status">{ order.status }</p>
      </section>
      { order.products.map((curr, index) => (
        <OrderProduct index={ index } product={ curr } key={ index } />
      )) }
      <p data-testid="order-total-value" className="order-total">
        { `Total: R$ ${order.totalPrice.replace('.', ',')}` }
      </p>
      { (order.status !== 'Entregue') && (
        <>
          <AdminButton callback={ updateStatus } id="preparando" />
          <AdminButton callback={ updateStatus } id="entregue" />
        </>) }
    </section>
  );
}
