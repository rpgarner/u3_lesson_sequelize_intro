'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    )
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
