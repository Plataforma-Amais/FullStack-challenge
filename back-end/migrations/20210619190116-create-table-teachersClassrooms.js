'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teachersClassrooms', {
      teacherId: {
        type: Sequelize.INTEGER,
        allowNull: false,      
        references: {
          model: 'teachers',
          key: 'id',
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      classroomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'classrooms',
          key: 'id',
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('teachersClassrooms');
  }
};