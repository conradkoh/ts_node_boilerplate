import express from 'express';
import api from './api';
import { getConfig } from './config/index';
const config = getConfig();
const app = express();

//Middleware and routers
app.use('/', (req, res) => {
    res.json(config.apiInfo);
});
app.use('/', api);

//Start listening to requests
app.listen(config.PORT, () => {
    const env = process.env.NODE_ENV;
    console.log(`Service Started: [${env}] on port ${config.PORT}`);
});
