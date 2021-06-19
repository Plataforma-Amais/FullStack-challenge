import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import AppContext from '../context/app.context';

import { getProductInfo, calcProductTotal } from '../utils';

export default function OrderProduct({ product, index }) {
  const { productsContext: { products } } = useContext(AppContext);

  console.log(products, product);

  if (products.length < 1 || !product.id) return 'Loading ...';

  return (
    <section key={ index } className="order-details-product">
      <span data-testid={ `${index}-product-qtd` } className="product-quant">
        { product.sale.quantity }
      </span>
      <span data-testid={ `${index}-product-name` } className="product-name">
        { getProductInfo(product.id, products, 'name') }
      </span>
      <section className="product-price-wrapper">
        <span data-testid={ `${index}-order-unit-price` } className="product-unit-price">
          { `(R$ ${getProductInfo(product.id, products, 'price')
            .replace('.', ',')})` }
        </span>
        <span data-testid={ `${index}-product-total-value` } className="product-total">
          { `R$ ${calcProductTotal(product.id, product.sale.quantity, products)
            .replace('.', ',')}` }
        </span>
      </section>
    </section>
  );
}

OrderProduct.propTypes = {
  product: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number.isRequired,
};

OrderProduct.defaultProps = {
  product: {},
};
