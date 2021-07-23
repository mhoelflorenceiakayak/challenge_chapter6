'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('match_schedules', [{
       username: 'John Doe',
       match_schedule: '05-05-2020',
       createdAt: new Date(),
       updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('match_schedules', null, {});
  
  }
};
