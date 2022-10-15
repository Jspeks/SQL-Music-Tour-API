'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.SMALLINT
      },
      event_id: {
        type: Sequelize.SMALLINT
      },
      band_id: {
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.DATE
      },
      end_time: {
        type: Sequelize.DATE
      },
      set_time_id: {
        type: Sequelize.INTEGER
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SetTimes');
  }
};