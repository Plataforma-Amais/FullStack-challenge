const { studentModel } = require('../models');

const validateBodyStudent = (field, message) => {
  if (!field) throw new Error(message);
};

const validateCreateStudent = async (name, parents, contacts, id_class) => {
  validateBodyStudent(name, 'name not exist');
  validateBodyStudent(parents, 'parents not exist');
  validateBodyStudent(contacts, 'contacts not exist');
  validateBodyStudent(id_class, 'id_class not exist');

  const newStudent = await studentModel.createStudent(name, parents, contacts, id_class);
  validateBodyStudent(newStudent.result.ok, 'Error to create newStudent');
  return { _id: newStudent.insertedId, name, parents, contacts, id_class };
};

const validateFindStudentById = async id => {
  validateBodyStudent(id, 'id not found');

  const student = await studentModel.findStudentById(id);
  validateBodyStudent(student, 'student not found');
  return student;
};

const validateDeleteStudentById = async id => {
  validateBodyStudent(id, 'id not found');

  const student = await studentModel.deleteStudentById(id);
  validateBodyStudent(student.deletedCount, 'error to delete a student');
  return student;
};

module.exports = {
  validateCreateStudent,
  validateFindStudentById,
  validateDeleteStudentById,
};
