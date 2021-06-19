const defineUserModel = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    profile: DataTypes.STRING,
  }, { timestamps: false });

  return user;
};

module.exports = defineUserModel;
