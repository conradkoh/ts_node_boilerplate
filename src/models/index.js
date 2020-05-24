const { Sequelize } = require('sequelize');
import { makeUserModel } from './user';
import { getConfig } from '../config/index';
const { database, username, password, host, port, dialect } = getConfig().db;

const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect,
});

const user = makeUserModel(sequelize);
export default {
    user,
};
