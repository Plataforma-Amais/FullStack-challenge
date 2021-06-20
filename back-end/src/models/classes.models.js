/* eslint-disable max-lines-per-function */
const connection = require('./connection');

const getBySchoolId = async (schoolId) => {
  const result = await connection()
    .then((db) => db.collection('classes').find({ schoolId }).toArray());

  return result;
};

const createClass = async (newClass) => {
  const result = await connection()
    .then((db) => db.collection('classes').insertOne(newClass));

  return result;
};

module.exports = {
  getBySchoolId,
  createClass,
};
