const defineUserModel = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    principal: DataTypes.STRING,
  }, { timestamps: false });

  return user;
};

module.exports = defineUserModel;
