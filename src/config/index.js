import dotenv from 'dotenv';
import packageInfo from '../../package.json';
dotenv.config();

export function getConfig() {
    return Object.freeze({
        PORT: process.env.PORT || 8081,
        ENV: process.env.NODE_ENV,
        //The info for this API
        apiInfo: {
            name: packageInfo.name,
            version: packageInfo.version,
        },
        db: {
            database: process.env.DB_DATABASE,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            /** @type {*} */
            dialect: process.env.DB_DIALECT,
            port: parseInt(process.env.DB_PORT),
        },
    });
}
