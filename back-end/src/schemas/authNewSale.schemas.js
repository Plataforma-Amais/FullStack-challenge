const { isBlank, isNotEqual } = require('./helpers');

const error = {
  noProducts: 'C_ERR_NO_PRODS',
  invalidProdInput: 'C_ERR_INVALID_PRODS',
  invalidDeliveryInput: 'C_ERR_INVALID_DELV',
  noUserId: 'C_ERR_NO_USER_TOKEN',
};

const validateSale = (products) => {
  if (products.length === 0) throw new Error(error.noProducts);
  const validateItem = ({ productId, quantity }) => {
    switch (true) {
      case isBlank(productId): throw new Error(error.invalidProdInput);
      case isBlank(quantity): throw new Error(error.invalidProdInput);
      case isNotEqual(typeof productId, 'number'): throw new Error(error.invalidProdInput);
      case isNotEqual(typeof quantity, 'number'): throw new Error(error.invalidProdInput);
      default: return null;
    }
  };
  products.forEach((product) => validateItem(product));
};

const validateDelivery = ({ address, number }) => {
  switch (true) {
    case isBlank(address): throw new Error(error.invalidDeliveryInput);
    case isBlank(number): throw new Error(error.invalidDeliveryInput);
    case isNotEqual(typeof address, 'string'): throw new Error(error.invalidDeliveryInput);
    case isNotEqual(typeof number, 'string'): throw new Error(error.invalidDeliveryInput);
    default: return null;
  }
};

module.exports = ({ sale = [], delivery = {} }, userId) => {
  switch (true) {
    case isNotEqual(typeof sale, 'object'): throw new Error(error.invalidProdInput);
    case isNotEqual(typeof delivery, 'object'): throw new Error(error.invalidDeliveryInput);
    case isNotEqual(typeof userId, 'number'): throw new Error(error.noUserId);
    default: break;
  }
  validateSale(sale);
  validateDelivery(delivery);
};
