/* eslint-disable max-lines-per-function */
const ObjectId = require('mongodb').ObjectID;
const connection = require('./connection');

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

  return result[0];
};

module.exports = {
  getByDirectorId,
};
