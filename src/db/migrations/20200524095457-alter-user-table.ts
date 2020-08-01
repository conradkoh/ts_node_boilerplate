'use strict';
import { QueryInterface, DataTypes } from 'sequelize';
module.exports = {
  up: async function (queryInterface: QueryInterface) {
    try {
      await queryInterface.addColumn('users', 'email', DataTypes.STRING);
    } catch (err) {
      console.error(err);
    }
  },
  down: async function (queryInterface: QueryInterface) {
    try {
      await queryInterface.removeColumn('users', 'email');
    } catch (err) {
      console.error(err);
    }
  },
};
