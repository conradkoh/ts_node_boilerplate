import express from 'express';
import path from 'path';
const docsFilePath = path.resolve(path.join(__dirname, '../../doc'));
const router = express.Router();
router.use('/', express.static(docsFilePath));
export default router;
