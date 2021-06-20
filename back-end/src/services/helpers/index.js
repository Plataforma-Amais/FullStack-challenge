const ObjectId = require('mongodb').ObjectID;
const { schools, classes } = require('../../models');

const error = {
  notDirector: 'C_ERR_SCHOOL_NOT_DIRECTOR',
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
  classNotFound: 'C_ERR_CLASS_NOT_FOUND',
  studentNameTaken: 'C_ERR_STUDENT_DUPLICATED',
};

const checkDirectorOfSchool = async (userId, checkId) => {
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  const schoolId = ObjectId(school.id);
  const classSchoolId = ObjectId(checkId);
  if (!schoolId.equals(classSchoolId)) throw new Error(error.notDirector);
};

const checkDirectorOwnsClass = async (userId, classId) => {
  const currClass = await classes.getById(classId);
  if (!currClass) throw new Error(error.classNotFound);
  checkDirectorOfSchool(userId, currClass.schoolId);
};

const checkDuplicateStudent = (array, name) => {
  const nameDuplicated = array.some((student) => student.name === name);
  if (nameDuplicated) throw new Error(error.studentNameTaken);
};

module.exports = {
  checkDirectorOfSchool,
  checkDirectorOwnsClass,
  checkDuplicateStudent,
};