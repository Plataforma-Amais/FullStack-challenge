const defineStudentModel = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING,
    guardian: DataTypes.STRING,
    phone1: DataTypes.STRING,
    phone2: DataTypes.STRING,
    email: DataTypes.STRING,
  }, { timestamps: false });

  return student;
};

module.exports = defineStudentModel;