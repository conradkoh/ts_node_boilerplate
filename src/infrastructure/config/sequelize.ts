import { Sequelize } from 'sequelize';
import { NodeEnv } from './constants';
import { DBConfig } from '.';

export function getSequelize(node_env: NodeEnv, config: DBConfig) {
  const { database, username, password, host, port, dialect } = config;
  switch (node_env) {
    case NodeEnv.TEST: {
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
