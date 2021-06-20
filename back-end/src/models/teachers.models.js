/* eslint-disable max-lines-per-function */
const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('users').find({ profile: 'teacher' }).toArray());

module.exports = {
  getAll,
};
