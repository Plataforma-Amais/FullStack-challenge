const { ObjectID } = require('mongodb');
const connection = require('../config/conn');

const NAME_COLLECTION = 'schools';

const createSchool = async (name, director) => {
  const newSchool = await connection().then(db =>
    db.collection(NAME_COLLECTION).insertOne({ name, director }),
  );
  return newSchool;
};

const findAllSchools = async () => {
  const newSchool = await connection().then(db =>
    db.collection(NAME_COLLECTION).find({}).toArray(),
  );
  return newSchool;
};

const findSchoolById = async id => {
  const newSchool = await connection().then(db =>
    db.collection(NAME_COLLECTION).findOne({ _id: ObjectID(id) }),
  );
  return newSchool;
};

const deleteSchoolById = async id => {
  const newSchool = await connection().then(db =>
    db.collection(NAME_COLLECTION).deleteOne({ _id: ObjectID(id) }),
  );
  return newSchool;
};

module.exports = {
  createSchool,
  findAllSchools,
  findSchoolById,
  deleteSchoolById,
};
