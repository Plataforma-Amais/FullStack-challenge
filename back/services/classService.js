const { classModel, schoolModel } = require('../models');

const validateBodyClass = (field, message) => {
  if (!field) throw new Error(message);
};

const validateCreateClass = async (name, id_school) => {
  validateBodyClass(name, 'name not exist');
  validateBodyClass(id_school, 'id_school not exist');

  const newClass = await classModel.createClass(name, id_school);
  validateBodyClass(newClass.result.ok, 'Error to create newClass');
  return { _id: newClass.insertedId, name, id_school };
};

const validateFindAll = async () => {
  const all = await classModel.findAllClasses();
  if (!all.length) {
    const schools = await schoolModel.findAllSchools();
    const listPromises = schools.map((school, i) =>
      validateCreateClass(`Turma ${i + 1}`, school._id),
    );
    await Promise.all(listPromises);
    return await classModel.findAllClasses();
  }
  return all;
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
  validateFindAll,
  validateFindClassById,
  validateDeleteClassById,
};
