/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */
const ObjectId = require('mongodb').ObjectID;
const { schools, students } = require('../models');
const { authInstanceId, authNewStudent } = require('../schemas');

const error = {
  differentTeacher: 'C_ERR_CLASS_NOT_TEACHER',
  classNotFound: 'C_ERR_CLASS_NOT_FOUND',
};

const getByClassId = async (classId, userId) => {
  authInstanceId([classId, userId]);
  const result = await students.getByClassId(classId);
  if (!result) throw new Error(error.classNotFound);
  if (result) {
    const user = ObjectId(userId);
    const isTeacher = result.teacher.find(
      (teacher) => ObjectId(teacher).equals(user),
    );
    if (!isTeacher) throw new Error(error.differentTeacher);
  }
  return result;
};

// const create = async (newStudent, classId, userId) => {
//   return null;
// };

const remove = async (classId, userId) => {
  authInstanceId(classId);
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  if (school) {
    const schoolId = ObjectId(school.director);
    const user = ObjectId(userId);
    if (!schoolId.equals(user)) throw new Error(error.differentDirector);
  }
  const result = await students.remove(classId);

  return result;
};

module.exports = {
  getByClassId,
  // create,
  remove,
};
