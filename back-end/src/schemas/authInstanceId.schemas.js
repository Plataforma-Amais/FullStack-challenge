const { isBlank, isNotString, isNotValidId } = require('./helpers');

const error = {
  missingId: 'C_ERR_ID_MISSING',
  invalidId: 'C_ERR_ID_INVALID',
};

const idValidator = (instanceId) => {
  switch (true) {
    case isBlank(instanceId): throw new Error(error.missingId);
    case isNotString(instanceId): throw new Error(error.invalidId);
    case isNotValidId(instanceId): throw new Error(error.invalidId);
    default: return null;
  }
};

const authInstanceId = (instanceId) => {
  if (typeof instanceId === 'string') return idValidator(instanceId);
  if (Array.isArray(instanceId) && instanceId.length > 0) {
    return instanceId.forEach((id) => idValidator(id));
  }
};

module.exports = authInstanceId;
