/* eslint-disable max-lines-per-function */
const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const getAll = async () => {
  const results = await connection()
    .then((db) => db.collection('schools').find().toArray())
    .catch((err) => err);

  return results;
};

const getById = async (schoolId) => {
  const result = await connection()
    .then((db) => db.collection('schools').findOne({ _id: ObjectId(schoolId) }));

  return result;
};

const getByDirectorId = async (userId) => {
  const result = await connection()
    .then((db) => db.collection('schools').aggregate([
      { $match: { director: ObjectId(userId) } },
      {
        $lookup: {
          from: 'classes',
          localField: '_id',
          foreignField: 'schoolId',
          as: 'classes',
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          address: 1,
          type: 1,
          director: 1,
          status: 1,
          classes: 1,
        },
      },
    ]).toArray());

  const { _id: id, ...data } = result[0];
  return { id, ...data };
};

const create = async (newSchool) => {
  const status = Boolean(newSchool.director);
  const result = await connection()
    .then((db) => db.collection('schools').insertOne(
      { ...newSchool, status },
    ));

  if (result) {
    const schoolCreated = {
      name: result.ops[0].name,
      address: result.ops[0].address,
      type: result.ops[0].type,
      director: result.ops[0].director,
    };
    return schoolCreated;
  }
  return null;
};

const update = async (school, schoolId) => {
  const status = !!(school.director);
  const { matchedCount, result: { nModified } } = await connection()
    .then((db) => db.collection('schools').updateOne(
      { _id: ObjectId(schoolId) },
      { $set: { ...school, status } },
    ));
  if (matchedCount === 0) return null;
  return (nModified > 0) ? school : 0;
};

const remove = async (schoolId) => {
  const result = await connection()
    .then((db) => db.collection('schools').deleteOne(
      { _id: ObjectId(schoolId) },
    ));

  return result;
};

module.exports = {
  getAll,
  getById,
  getByDirectorId,
  create,
  update,
  remove,
};
