/* eslint-disable max-lines-per-function */
const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const getByClassId = async (classId) => {
  const result = await connection()
    .then((db) => db.collection('classes').findOne({ _id: ObjectId(classId) }));
  if (!result) return null;
  return (result.students) ? result.students : [];
};

const create = async (newStudent, classId) => {
  const result = await connection()
    .then((db) => db.collection('classes').updateOne(
      { _id: ObjectId(classId) },
      { $push: { students: newStudent } },
    ));

  return result;
};

const remove = async (classId) => {
  const result = await connection()
    .then((db) => db.collection('classes').deleteOne({ _id: ObjectId(classId) }));

  return result.deletedCount > 0;
};

module.exports = {
  getByClassId,
  create,
  remove,
};
