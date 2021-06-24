const { teacherModel } = require('../models');

const validateBodyTeacher = (field, message) => {
  if (!field) throw new Error(message);
};

const validateCreateTeacher = async (name, materia, id_class) => {
  validateBodyTeacher(name, 'name not exist');
  validateBodyTeacher(materia, 'materia not exist');
  validateBodyTeacher(id_class, 'id_class not exist');

  const newTeacher = await teacherModel.createTeacher(name, materia, id_class);
  validateBodyTeacher(newTeacher.result.ok, 'Error to create newTeacher');
  return { _id: newTeacher.insertedId, name, materia, id_class };
};

const validateFindTeacherById = async id => {
  validateBodyTeacher(id, 'id not found');

  const teacher = await teacherModel.findTeacherById(id);
  validateBodyTeacher(teacher, 'teacher not found');
  return teacher;
};

const validateDeleteTeacherById = async id => {
  validateBodyTeacher(id, 'id not found');

  const teacher = await teacherModel.deleteTeacherById(id);
  validateBodyTeacher(teacher.deletedCount, 'error to delete a teacher');
  return teacher;
};

module.exports = {
  validateCreateTeacher,
  validateFindTeacherById,
  validateDeleteTeacherById,
};
