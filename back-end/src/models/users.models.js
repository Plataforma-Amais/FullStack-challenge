const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const create = async (newUser) => {
  const result = await connection()
    .then((db) => db.collection('users').insertOne(newUser)
    .catch((err) => err));

  return result.insertedId;
};

const findUserByEmail = async (query) => {
  const result = await connection()
    .then((db) => db.collection('users').findOne({ email: query }))
    .catch((err) => err);
  if (result) {
    const { _id: id, ...user } = result;
    return { ...user, id };
  }
  return null;
};

const getUserProfile = async (userId) => {
  const result = await connection()
    .then((db) => db.collection('users').findOne({ _id: ObjectId(userId) }))
    .catch((err) => err);
  if (result) {
    const { profile } = result;
    return profile;
  }
  return null;
};

module.exports = {
  create,
  findUserByEmail,
  getUserProfile,
};
