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
  if (result) {
      const classCreated = {
        schoolId: result.ops[0].schoolId,
        year: result.ops[0].year,
        grade: result.ops[0].grade,
        class: result.ops[0].class,
        teachers: result.ops[0].teachers,
      };
      return classCreated;
    }
  return result;
};

const update = async (classId, field, value) => {
  const updateField = {};
  updateField[field] = value;
  const set = {
    $set: updateField,
  };
  const { matchedCount, result: { nModified } } = await connection()
    .then((db) => db.collection('classes').updateOne(
      { _id: ObjectId(classId) },
      set,
    ));
  if (matchedCount === 0) return null;
  return (nModified) ? value : 0;
};

const remove = async (classId) => {
  const result = await connection()
    .then((db) => db.collection('classes').deleteOne({ _id: ObjectId(classId) }));

  return result.deletedCount > 0;
};

const addComment = async (payload, userId) => {
  const newComment = { msg: payload.msg, teacher: userId };
  const { matchedCount, result: { nModified } } = await connection()
    .then((db) => db.collection('classes').updateOne(
      { _id: ObjectId(payload.classId) },
      { $push: { comments: newComment } },
    ));
  if (matchedCount === 0) return null;
  return (nModified > 0) ? newComment : 0;
};

module.exports = {
  addComment,
  getBySchoolId,
  getById,
  create,
  update,
  remove,
};
