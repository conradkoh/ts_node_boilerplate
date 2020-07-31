import express from 'express';
import { getConfig } from '../config/index';
import controllers from '../controllers';
import docsRouter from './docs';
const config = getConfig();
const router = express.Router();
/**
 *
 * @api {get} / API Info
 * @apiName apiInfo
 * @apiGroup apiInfo
 * @apiVersion  1.0.0
 *
 *
 * @apiSuccess (200) {string} name API Name
 * @apiSuccess (200) {string} version API Version
 *
 * @apiParamExample  {type} Request-Example:
 * {
 * }
 *
 *
 * @apiSuccessExample {type} Success-Response:
 * {
 *     "name": "API Name",
 *     "version": "1.0.0"
 * }
 */
router.get('/', (req, res) => {
  res.json(config.apiInfo);
});

router.use('/docs', docsRouter);
export default router;
