'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('user_biodata', [{
       fullname: 'John Doe',
       country: 'india',
       match_schedule: '05-05-2020',
       email: 'jhondoe@gmail.com',
       username: 'jhooon',
       password: '123456',
       createdAt: new Date(),
       updatedAt: new Date()
      }], {});
  
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('user_biodata', null, {});
     
  }
};
