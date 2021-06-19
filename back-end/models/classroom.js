const defineClassroomModel = (sequelize, DataTypes) => {
  const classroom = sequelize.define('classroom', {
    name: DataTypes.STRING,
    teacherId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, { timestamps: false });

  classroom.associate = (models) => {
    classroom.belongsTo(models.teacher, {
      as: 'teacher',
      foreignKey: 'teacherId',
    });
  };

  return classroom;
};

module.exports = defineClassroomModel;

