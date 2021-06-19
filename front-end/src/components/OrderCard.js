import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import AppContext from '../context/app.context';
import { convertDate } from '../utils';

export default function OrderCard({ order, index }) {
  const { tokenContext: { token } } = useContext(AppContext);
  const { id, totalPrice, createdAt: date, status,
    deliveryAddress: street, deliveryNumber: number } = order;

  const history = useHistory();

  let statusCss = 'status success';
  if (status === 'Pendente') statusCss = 'status alert';
  if (status === 'Preparando') statusCss = 'status warning';

  const getOrderDetails = () => {
    if (token.role === 'administrator') return history.push(`/admin/orders/${id}`);
    history.push(`/orders/${id}`);
  };

  return (
    <section
      className="order-card"
      role="link"
      onClick={ getOrderDetails }
      onKeyDown={ getOrderDetails }
      tabIndex={ index }
      key={ `${index}-${id}` }
      data-testid={ `${index}-order-card-container` }
    >
      <section className="name" data-testid={ `${index}-order-number` }>
        { `Pedido ${id}` }
      </section>
      { (token.role === 'administrator') && (
        <span data-testid={ `${index}-order-address` }>
          { `${street}, ${number}` }
        </span>
      ) }
      <section className="total" data-testid={ `${index}-order-total-value` }>
        { `R$ ${totalPrice.replace('.', ',')}` }
      </section>
      <section className="date" data-testid={ `${index}-order-date` }>
        { convertDate(date)[0] }
        <br />
        { convertDate(date)[1] }
      </section>
      <span
        data-testid={ `${index}-order-status` }
        className={ statusCss }
      >
        {status}
      </span>
    </section>
  );
}

OrderCard.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};
