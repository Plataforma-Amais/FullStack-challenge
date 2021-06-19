const defineStudentClassroomModel = (sequelize, _DataTypes) => {
  const studentClassroom = sequelize.define('studentClassroom',
    { }, { timestamps: false, tableName: 'studentsClassrooms' });
    
    studentClassroom.associate = (models) => {
      models.student.belongsToMany(models.classroom, {
        as: 'classrooms',
        through: studentClassroom,
        foreignKey: 'studentId',
        otherKey: 'classroomId',
      });
  
      models.classroom.belongsToMany(models.student, {
        as: 'students',
        through: studentClassroom,
        foreignKey: 'classroomId',
        otherKey: 'studentId',
      });
  };
  return studentClassroom;
};

module.exports = defineStudentClassroomModel;