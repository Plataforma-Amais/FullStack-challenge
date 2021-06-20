/* eslint-disable max-lines-per-function */
const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const getBySchoolId = async (schoolId) => {
  const result = await connection()
    .then((db) => db.collection('classes').find({ schoolId }).toArray());

  return result;
};

const getById = async (classId) => {
  const result = await connection()
    .then((db) => db.collection('classes').findOne({ _id: ObjectId(classId) }));

  return result;
};

const create = async (newClass) => {
  const result = await connection()
    .then((db) => db.collection('classes').insertOne(newClass));

  return result;
};

const remove = async (classId) => {
  const result = await connection()
    .then((db) => db.collection('classes').deleteOne({ _id: ObjectId(classId) }));

  return result.deletedCount > 0;
};

module.exports = {
  getBySchoolId,
  getById,
  create,
  remove,
};
