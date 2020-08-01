import express from 'express';
import path from 'path';
const docsFilePath = path.resolve(path.join(__dirname, '../../doc'));
console.log('loading docs from ' + docsFilePath);
const router = express.Router();
router.use('/', express.static(docsFilePath));
export default router;
