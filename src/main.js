import express from 'express';
import api from './api';
import { getConfig } from './config/index';
const config = getConfig();
const app = express();
//Middleware and routers
app.use('/', api);

//Start listening to requests
app.listen(config.PORT, () => {
    const env = config.ENV;
    console.log(`Service Started: [${env}] on port ${config.PORT}`);
});
