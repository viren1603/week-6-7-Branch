'use strict';

/** @type {import('sequelize-cli').Migration} */

// npx sequelize-cli db:migrate
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('player', 'team_id', {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'team',
            key: 'id'
          },
          onUpdate: "RESTRICT",
          onDelete: "RESTRICT",
          allowNull: false
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('player', 'team_id', { transaction: t }),
      ]);
    });
  }
};
