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
    });
}
