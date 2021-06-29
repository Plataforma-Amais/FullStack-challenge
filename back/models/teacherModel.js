const { ObjectID } = require('mongodb');
const connection = require('../config/conn');

const NAME_COLLECTION = 'teachers';

const createTeacher = async (name, materia, id_class) => {
  const newTeacher = await connection().then(db =>
    db.collection(NAME_COLLECTION).insertOne({ name, materia, id_class }),
  );
  return newTeacher;
};

const findAllTeachers = async () => {
  const allTeachers = await connection().then(db =>
    db.collection(NAME_COLLECTION).find({}).toArray(),
  );
  return allTeachers;
};

const findTeacherById = async id => {
  const teacherResult = await connection().then(db =>
    db.collection(NAME_COLLECTION).findOne({ _id: ObjectID(id) }),
  );
  return teacherResult;
};

const deleteTeacherById = async id => {
  const teacher = await connection().then(db =>
    db.collection(NAME_COLLECTION).deleteOne({ _id: ObjectID(id) }),
  );
  return teacher;
};

module.exports = {
  createTeacher,
  findAllTeachers,
  findTeacherById,
  deleteTeacherById,
};
