const { schoolModel } = require('../models');

const validateBodySchool = (field, message) => {
  if (!field) throw new Error(message);
};

const validateCreateSchool = async (name, director) => {
  validateBodySchool(name, 'name not exist');
  validateBodySchool(director, 'director not exist');

  const newSchool = await schoolModel.createSchool(name, director);
  validateBodySchool(newSchool.result.ok, 'Error to create newSchool');
  return { _id: newSchool.insertedId, name, director };
};

const validateFindAll = async () => {
  const allSchools = await schoolModel.findAllSchools();
  if (!allSchools.length) {
    for (let i = 1; i <= 5; i += 1) {
      await validateCreateSchool(`Escola ${i}`, `Fulano ${i}`);
    }
    return await schoolModel.findAllSchools();
  }
  return allSchools;
};

const validateFindSchoolById = async id => {
  validateBodySchool(id, 'id not found');

  const school = await schoolModel.findSchoolById(id);
  validateBodySchool(school, 'school not found');
  return school;
};

const validateDeleteSchoolById = async id => {
  validateBodySchool(id, 'id not found');

  const school = await schoolModel.deleteSchoolById(id);
  validateBodySchool(school.deletedCount, 'error to delete a school');
  return school;
};

module.exports = {
  validateCreateSchool,
  validateFindAll,
  validateFindSchoolById,
  validateDeleteSchoolById,
};
