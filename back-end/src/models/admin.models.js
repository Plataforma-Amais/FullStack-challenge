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

const removeUserId = async (userId) => {
  const result = await connection()
  .then((db) => db.collection('users').deleteOne({ _id: ObjectId(userId) }));

  return result;
};

module.exports = {
  getAllUsers,
  getUsersByProfile,
  removeUserId,
};
