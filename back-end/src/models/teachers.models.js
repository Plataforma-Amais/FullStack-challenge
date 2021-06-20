/* eslint-disable max-lines-per-function */
const connection = require('./connection');

const getClasses = async (userId) => connection()
  .then((db) => db.collection('classes').find({ teachers: userId }).toArray());

module.exports = {
  getClasses,
};
