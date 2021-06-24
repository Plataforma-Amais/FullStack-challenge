const { classModel } = require('../models');

const validateBodyClass = (field, message) => {
  if (!field) throw new Error(message);
};

const validateCreateClass = async (name, id_professor, id_school) => {
  validateBodyClass(name, 'name not exist');
  validateBodyClass(id_professor, 'id_professor not exist');
  validateBodyClass(id_school, 'id_school not exist');

  const newClass = await classModel.createClass(name, id_professor, id_school);
  validateBodyClass(newClass.result.ok, 'Error to create newClass');
  return { _id: newClass.insertedId, name, id_professor, id_school };
};

const validateFindClassById = async id => {
  validateBodyClass(id, 'id not found');

  const classResult = await classModel.findClassById(id);
  validateBodyClass(classResult, 'classResult not found');
  return classResult;
};

const validateDeleteClassById = async id => {
  validateBodyClass(id, 'id not found');

  const classResult = await classModel.deleteClassById(id);
  validateBodyClass(classResult.deletedCount, 'error to delete a classResult');
  return classResult;
};

module.exports = {
  validateCreateClass,
  validateFindClassById,
  validateDeleteClassById,
};
