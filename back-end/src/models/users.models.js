const connection = require('./connection');

const create = async (newUser) => {
  const result = await connection()
    .then((db) => db.collection('users').insertOne(newUser)
    .catch((err) => err));

  return result.insertedId;
};

const findUserByEmail = async (email) => {
  const result = await connection()
    .then((db) => db.collection('users').findOne({ email }))
    .catch((err) => console.log('err: ', err));

  return result;
};

module.exports = {
  create,
  findUserByEmail,
};
