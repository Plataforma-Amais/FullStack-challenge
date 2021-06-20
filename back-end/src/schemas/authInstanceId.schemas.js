const { isBlank, isNotString, isNotValidId } = require('./helpers');

const error = {
  missingId: 'C_ERR_ID_MISSING',
  invalidId: 'C_ERR_ID_INVALID',
};

const authInstanceId = (instanceId) => {
  switch (true) {
    case isBlank(instanceId): throw new Error(error.missingId);
    case isNotString(instanceId): throw new Error(error.invalidId);
    case isNotValidId(instanceId): throw new Error(error.invalidId);
    default: return null;
  }
};

module.exports = authInstanceId;
