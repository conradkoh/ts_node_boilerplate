import dotenv from 'dotenv';
// import packageInfo from '../../package.json';
import path from 'path';
import { NodeEnv } from './constants';
import { readFileSync, fchmod } from 'fs';
dotenv.config();

interface Config {
  NODE_PORT: string | number;
  NODE_ENV: NodeEnv;
  apiInfo: ApiInfo;
  db: DBConfig;
}

export function getConfig(): Config {
  const NODE_PORT = process.env.PORT || 8081;
  const { NODE_ENV, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } = parseEnv(process.env);
  let packageInfo = tryGetPackageInfo();
  const APIINFO_NAME = packageInfo.name;
  const APIINFO_VERSION = packageInfo.version;
  return Object.freeze({
    NODE_PORT,
    NODE_ENV,
    //The info for this API
    apiInfo: {
      name: APIINFO_NAME,
      version: APIINFO_VERSION,
    },
    db: {
      database: DB_DATABASE,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
      dialect: DB_DIALECT,
    },
  });
}
function tryGetPackageInfo(): PackageInfo {
  let packageManifestPath = path.resolve(path.join(__dirname, '../../package.json'));
  let packageInfo = {
    name: '',
    version: 'unknown',
  };
  try {
    let fc = readFileSync(packageManifestPath).toString();
    let data = JSON.parse(fc);
    packageInfo.name = `${data.name}`;
    packageInfo.version = `${data.version}`;
  } finally {
    return packageInfo;
  }
}
function parseEnv(env: NodeJS.ProcessEnv): EnvConfig {
  const { NODE_ENV, DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT } = env;
  const DB_PORT = parseInt(`${env.DB_PORT || 3360}`);
  if (!NODE_ENV) {
    throw new MissingEnvError('NODE_ENV');
  }
  if (!DB_DATABASE) {
    throw new MissingEnvError('DB_DATABASE');
  }
  if (!DB_USERNAME) {
    throw new MissingEnvError('DB_USERNAME');
  }
  if (!DB_PASSWORD) {
    throw new MissingEnvError('DB_PASSWORD');
  }
  if (!DB_HOST) {
    throw new MissingEnvError('DB_HOST');
  }
  if (!DB_DIALECT) {
    throw new MissingEnvError('DB_DIALECT');
  }
  if (!DB_PORT) {
    throw new MissingEnvError('DB_PORT');
  }
  let allowedVals = {
    NODE_ENV: <string[]>[NodeEnv.DEVELOPMENT, NodeEnv.TEST, NodeEnv.PRODUCTION],
    DB_DIALECT: <string[]>[DbDialect.MySQL],
  };
  if (!allowedVals.NODE_ENV.includes(NODE_ENV)) {
    throw new InvalidEnvValueError('NODE_ENV', NODE_ENV);
  }
  if (!allowedVals.DB_DIALECT.includes(DB_DIALECT)) {
    throw new InvalidEnvValueError('DB_DIALECT', DB_DIALECT);
  }
  return {
    NODE_ENV: <NodeEnv>NODE_ENV,
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_DIALECT: <DbDialect>DB_DIALECT,
    DB_PORT,
  };
}

interface PackageInfo {
  name: string;
  version: string;
}
interface EnvConfig {
  NODE_ENV: NodeEnv;
  DB_DATABASE: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_DIALECT: DbDialect;
}

class MissingEnvError extends Error {
  constructor(key: string) {
    super(`Environment configuration missing: ${key}`);
  }
}
class InvalidEnvValueError extends Error {
  constructor(key: string, value: any) {
    super(`Environment configuration invalid: key '${key}' has invalid value ${value}`);
  }
}

export interface DBConfig {
  database: string;
  username: string;
  password: string;
  host: string;
  port: number;
  dialect: DbDialect;
}
enum DbDialect {
  MySQL = 'mysql',
}
interface ApiInfo {
  name: string;
  version: string;
}
