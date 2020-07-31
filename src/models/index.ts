import { makeUserModel } from './user';
import { getConfig } from '../config/index';
import { getSequelize } from '../config/sequelize';

const config = getConfig(); //Global configuration
const sequelize = getSequelize(config.NODE_ENV, config.db); //Initialize Sequelize

//Update all models to follow app definition
sequelize.sync();

const user = makeUserModel(sequelize);
export default {
    user,
};
