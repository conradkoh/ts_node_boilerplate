import { Sequelize } from 'sequelize';
import { NODE_ENV } from './constants';
export function getSequelize(node_env, { database, username, password, host, port, dialect }) {
    switch (node_env) {
        case NODE_ENV.TEST: {
            return new Sequelize('sqlite::memory:');
        }
        default: {
            return new Sequelize(database, username, password, {
                host,
                port,
                dialect,
            });
        }
    }
}
