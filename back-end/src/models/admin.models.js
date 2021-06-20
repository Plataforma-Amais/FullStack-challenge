/* eslint-disable no-underscore-dangle */
const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const getAllUsers = async () => {
  const results = await connection()
    .then((db) => db.collection('users').find().toArray())
    .catch((err) => err);

  return results;
};

const getUsersByProfile = async (profile) => {
  const results = await connection()
    .then((db) => db.collection('users').find({ profile }).toArray());

  return results;
};

const getDirector = async (email) => {
  const result = await connection()
    .then((db) => db.collection('users').findOne({ email }));
  if (result) return result._id;
  return null;
};

const removeUser = async (userId) => {
  const result = await connection()
    .then((db) => db.collection('users').deleteOne({ _id: ObjectId(userId) }));

  return result;
};

const getAllSchools = async () => {
  const results = await connection()
    .then((db) => db.collection('schools').find().toArray())
    .catch((err) => err);

  return results;
};

const createSchool = async (newSchool) => {
  const status = Boolean(newSchool.director);
  const result = await connection()
    .then((db) => db.collection('schools').insertOne({ ...newSchool, status }));

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

const updateSchool = async (school, schoolId) => {
  const status = !!(school.director);
  const result = await connection()
    .then((db) => db.collection('schools').updateOne(
      { _id: ObjectId(schoolId) },
      { $set: { ...school, status } },
    ));

  return result;
};

const removeSchool = async (schoolId) => {
  const result = await connection()
    .then((db) => db.collection('schools').deleteOne({ _id: ObjectId(schoolId) }));

  return result;
};

module.exports = {
  getAllUsers,
  getUsersByProfile,
  removeUser,
  getAllSchools,
  createSchool,
  updateSchool,
  removeSchool,
  getDirector,
};
