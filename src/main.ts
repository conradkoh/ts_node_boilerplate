import express from 'express';
import api from './infrastructure/api';
import { getConfig } from './infrastructure/config/index';
const config = getConfig();
const app = express();
//Middleware and routers
app.use('/', api);

//Start listening to requests
app.listen(config.NODE_PORT, () => {
  const env = config.NODE_ENV;
  console.log(`Service Started: [${env}] on port ${config.NODE_PORT}`);
});
