const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const getAllUsers = async () => {
  const results = await connection()
    .then((db) => db.collection('users').find().toArray())
    .catch((err) => err);

  return results;
};

const getUsersByProfile = async (profile) => {
  console.log(profile);
  const results = await connection()
    .then((db) => db.collection('users').find({ profile }).toArray());

  return results;
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
  const result = await connection()
  .then((db) => db.collection('schools').insertOne(newSchool, { _id: 0 }));

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
  removeSchool,
};
