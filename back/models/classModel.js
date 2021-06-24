const { ObjectID } = require('mongodb');
const connection = require('../config/conn');

const NAME_COLLECTION = 'classes';

const createClass = async (name, professor, id_school) => {
  const newClass = await connection().then(db =>
    db.collection(NAME_COLLECTION).insertOne({ name, professor, id_school }),
  );
  return newClass;
};

const findAllClasses = async () => {
  const allClasses = await connection().then(db =>
    db.collection(NAME_COLLECTION).find({}).toArray(),
  );
  return allClasses;
};

const findClassById = async id => {
  const newClass = await connection().then(db =>
    db.collection(NAME_COLLECTION).findOne({ _id: ObjectID(id) }),
  );
  return newClass;
};

const deleteClassById = async id => {
  const newClass = await connection().then(db =>
    db.collection(NAME_COLLECTION).deleteOne({ _id: ObjectID(id) }),
  );
  return newClass;
};

module.exports = {
  createClass,
  findAllClasses,
  findClassById,
  deleteClassById,
};
