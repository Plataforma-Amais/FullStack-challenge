const { isBlank, notInclude } = require('./helpers');

const error = {
  invalidStatus: 'C_ERR_INVALID_STATUS',
  saleInvalid: 'C_ERR_SALE_NOT_VALID',
};

const validStatus = [
  'Pendente',
  'Preparando',
  'Entregue',
];

const authStatusUpdate = (saleId, status) => {
  switch (true) {
    case isBlank(status): throw new Error(error.invalidStatus);
    case notInclude(validStatus, status): throw new Error(error.invalidStatus);
    case isBlank(saleId): throw new Error(error.saleInvalid);
    default: return null;
  }
};

module.exports = authStatusUpdate;
