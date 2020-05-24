import dotenv from 'dotenv';
import packageInfo from '../../package.json';
dotenv.config();

export function getConfig() {
    const NODE_PORT = process.env.PORT || 8081;
    const NODE_ENV = process.env.NODE_ENV;
    const APIINFO_NAME = packageInfo.name;
    const APIINFO_VERSION = packageInfo.version;
    const DB_DATABASE = process.env.DB_DATABASE;
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    /** @type {*} */
    const DB_DIALECT = process.env.DB_DIALECT;
    const DB_PORT = parseInt(process.env.DB_PORT);
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
            dialect: DB_DIALECT,
            port: DB_PORT,
        },
    });
}
