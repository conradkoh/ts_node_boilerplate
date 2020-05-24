'use strict';
const { QueryInterface, DataTypes } = require('sequelize');
module.exports = {
    /**
     * @param {QueryInterface} queryInterface
     */
    up: async function (queryInterface) {
        try {
            await queryInterface.addColumn('users', 'email', DataTypes.STRING);
        } catch (err) {
            console.error(err);
        }
    },
    /**
     * @param {QueryInterface} queryInterface
     */
    down: async function (queryInterface) {
        try {
            await queryInterface.removeColumn('users', 'email');
        } catch (err) {
            console.error(err);
        }
    },
};
