/* eslint-disable complexity */
const {
  isBlank,
  isNotString } = require('./helpers');

const error = {
  missingMsg: 'C_ERR_MESSAGE_MISSING',
  invalidMsg: 'C_ERR_MESSAGE_INVALID',
};

const authNewComment = (newComment) => {
  switch (true) {
    case isBlank(newComment): throw new Error(error.missingMsg);
    case isNotString(newComment): throw new Error(error.invalidMsg);
    default: return null;
  }
};

module.exports = authNewComment;
