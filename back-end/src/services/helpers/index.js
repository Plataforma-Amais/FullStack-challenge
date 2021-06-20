const ObjectId = require('mongodb').ObjectID;

const error = {
  notDirector: 'C_ERR_SCHOOL_NOT_DIRECTOR',
};

const checkDirector = async (schoolDirector, user) => {
  const userId = ObjectId(user);
  const schoolDirectorId = ObjectId(schoolDirector);
  if (!schoolDirectorId.equals(userId)) throw new Error(error.notDirector);
  return null;
};

module.exports = {
  checkDirector,
};