import express from 'express';
import controllers from '../controllers';
const router = express.Router();
router.get('/', async (req, res) => {
  let data = await controllers.user.createUser('firstName', 'lastName', 'email@email.com');
  res.json(data);
});
export default router;
