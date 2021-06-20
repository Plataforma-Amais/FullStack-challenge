/* eslint-disable no-underscore-dangle */
const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

const getAll = async () => {
  const results = await connection()
    .then((db) => db.collection('users').find().toArray())
    .catch((err) => err);

  return results;
};

const getByProfile = async (profile) => {
  const results = await connection()
    .then((db) => db.collection('users').find({ profile }).toArray());

  return results;
};

const getUserId = async (email) => {
  const result = await connection()
    .then((db) => db.collection('users').findOne({ email }));
  if (result) return result._id;
  return null;
};

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

const removeOne = async (userId) => {
  const result = await connection()
    .then((db) => db.collection('users').deleteOne({ _id: ObjectId(userId) }));

  return result;
};

module.exports = {
  getAll,
  getByProfile,
  getUserId,
  create,
  findUserByEmail,
  getUserProfile,
  removeOne,
};
