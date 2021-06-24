const { ObjectID } = require('mongodb');
const connection = require('../config/conn');

const NAME_COLLECTION = 'students';

const createStudent = async (name, parents, contacts, id_class) => {
  const newStudent = await connection().then(db =>
    db.collection(NAME_COLLECTION).insertOne({ name, parents, contacts, id_class }),
  );
  return newStudent;
};

const findAllStudent = async () => {
  const allStudent = await connection().then(db =>
    db.collection(NAME_COLLECTION).find({}).toArray(),
  );
  return allStudent;
};

const findStudentById = async id => {
  const student = await connection().then(db =>
    db.collection(NAME_COLLECTION).findOne({ _id: ObjectID(id) }),
  );
  return student;
};

const deleteStudentById = async id => {
  const student = await connection().then(db =>
    db.collection(NAME_COLLECTION).deleteOne({ _id: ObjectID(id) }),
  );
  return student;
};

module.exports = {
  createStudent,
  findAllStudent,
  findStudentById,
  deleteStudentById,
};
