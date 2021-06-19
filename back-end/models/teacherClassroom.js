const defineTeacherClassroomModel = (sequelize, _DataTypes) => {
  const teacherClassroom = sequelize.define('teacherClassroom',
    { }, { timestamps: false, tableName: 'teachersClassrooms' });
    
    teacherClassroom.associate = (models) => {
      models.teacher.belongsToMany(models.classroom, {
        as: 'classrooms',
        through: teacherClassroom,
        foreignKey: 'teacherId',
        otherKey: 'classroomId',
      });
  
      models.classroom.belongsToMany(models.teacher, {
        as: 'teachers',
        through: teacherClassroom,
        foreignKey: 'classroomId',
        otherKey: 'teacherId',
      });
  };
  return teacherClassroom;
};

module.exports = defineTeacherClassroomModel;