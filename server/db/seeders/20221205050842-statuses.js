'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RequestStatuses', [
      {
        code: 'billet',
        name: 'Заготовка',
        stage: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'in_work',
        name: 'В работе',
        stage: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'on_approval',
        name: 'На согласовании',
        stage: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'accepted',
        name: 'Принята',
        stage: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'rejected',
        name: 'Отказ',
        stage: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    return queryInterface.bulkDelete('RequestStatuses', null, {});
  },
};
